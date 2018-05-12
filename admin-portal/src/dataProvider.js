import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils
} from 'react-admin';
import { stringify } from 'query-string';

const API_URL = '/api/v1';


/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {

  let url = `${API_URL}/${resource}`;
  const options = {
    headers: new Headers({ Accept: 'application/json' })
  };
  const token = localStorage.getItem('token');
  options.headers.set('x-access-token', token);

  switch (type) {

    case GET_LIST: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify(params.filter)
      };
      url += `?${stringify(query)}`;
      break;
    }

    case GET_ONE:
      url += `/${params.id}`;
      break;

    case GET_MANY: {
      const query = {
        filter: JSON.stringify({ id: params.ids })
      };
      url += `?${stringify(query)}`;
      break;
    }

    case GET_MANY_REFERENCE: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
        filter: JSON.stringify({ ...params.filter, [params.target]: params.id })
      };
      url += `?${stringify(query)}`;
      break;
    }

    case UPDATE:
      url += `/${params.id}`;
      options.method = 'PUT';
      options.body = JSON.stringify(params.data);
      break;

    case CREATE:
      options.method = 'POST';
      options.body = JSON.stringify(params.data);
      break;

    case DELETE:
      url += `/${params.id}`;
      options.method = 'DELETE';
      options.body = JSON.stringify(params.data);
      break;

    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }

  console.log(url);
  return { url, options };
};

/**
* @param {Object} response HTTP response from fetch()
* @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
* @param {String} resource Name of the resource to fetch, e.g. 'posts'
* @param {Object} params The Data Provider request params, depending on the type
* @returns {Object} Data Provider response
*/
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
  const { headers, json } = response;

  switch (type) {

    case GET_LIST:
      return {
        data: json.data.map(x => x),
        // total: parseInt(headers.get('content-range').split('/').pop(), 10)
        total: json.total
      };

    case CREATE:
      return { data: { ...params.data, id: json.data.id } };

    default:
      return { data: json.data };
  }
};

/**
* @param {string} type Request type, e.g GET_LIST
* @param {string} resource Resource name, e.g. "posts"
* @param {Object} payload Request parameters. Depends on the request type
* @returns {Promise} the Promise for response
*/
export default (type, resource, params) => {
  const { fetchJson } = fetchUtils;
  const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
  return fetchJson(url, options) // fetch().then(r => r.json())
    .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};
