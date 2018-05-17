import React from 'react';
import PropTypes from 'prop-types';

const UrlField = ({ record = {}, source }) =>
  (
    <a href={`http://${record[source]}`} target="_blank">
      {record[source]}
    </a>
  );

UrlField.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};

UrlField.defaultProps = {
  record: { source: '' }
};

export default UrlField;
