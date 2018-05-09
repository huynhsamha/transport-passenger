// in src/restClient
import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils
} from 'admin-on-rest';
import { stringify } from 'query-string';
import axios from 'axios';

const API_URL = '/api/v1';

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The REST request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertRESTRequestToHTTP = (type, resource, params) => {
  let url = '';
  const options = {};
  switch (type) {
    case GET_LIST: {
      const query = {
        offset: JSON.stringify(params.offset),
        limit: JSON.stringify(params.limit)
      };
      url = `${API_URL}/${resource}?${stringify(query)}`;
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = localStorage.getItem('token');
      options.headers.set('x-access-token', `${token}`);

      break;
    }

    case GET_MANY: {
      const query = {
        id: JSON.stringify([params.id])
      };
      url = `${API_URL}/${resource}?${stringify(query)}`;
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = localStorage.getItem('token');
      options.headers.set('x-access-token', `${token}`);

      break;
    }

    case GET_ONE: {
      url = `${API_URL}/${resource}/${params.id}`;
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = localStorage.getItem('token');
      options.headers.set('x-access-token', `${token}`);
      break;
    }
    case UPDATE: {
      url = `${API_URL}/${resource}/${params.id}`;
      options.method = 'PUT';
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = localStorage.getItem('token');
      options.headers.set('x-access-token', `${token}`);
      options.headers.set('Content-Type', 'application/x-www-form-urlencoded');
      options.body = JSON.stringify(params.data);
      break;
    }
    case CREATE: {
      url = `${API_URL}/${resource}`;
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = localStorage.getItem('token');
      options.headers.set('x-access-token', `${token}`);
      options.method = 'POST';
      options.body = JSON.stringify(params.data);
      break;
    }
    case DELETE: {
      url = `${API_URL}/${resource}/${params.id}`;
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = localStorage.getItem('token');
      options.headers.set('x-access-token', `${token}`);
      options.method = 'DELETE';
      break;
    }
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
  return { url, options };
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The REST request params, depending on the type
 * @returns {Object} REST response
 */
const convertHTTPResponseToREST = (response, type, resource, params) => {
  const { headers, json } = response;
  switch (type) {
    case GET_LIST:
      return {
        data: json.data.map(x => x),
        total: json.data.length
      };
    case CREATE:
      return { data: { ...params.data, id: json.id } };
    default:
      return { data: json };
  }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a REST response
 */
export default (type, resource, params) => {
  const { fetchJson } = fetchUtils;
  const { url, options } = convertRESTRequestToHTTP(type, resource, params);
  return fetchJson(url, options)
    .then(response => convertHTTPResponseToREST(response, type, resource, params));
};
