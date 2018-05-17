import React from 'react';
import PropTypes from 'prop-types';

const AvatarField = ({ record = {}, source, dimens }) =>
  (
    <img
      src={record[source] || '/img/avatar.png'} alt="avatar user" style={{
        width: dimens, height: dimens,
        borderRadius: '50%',
        objectPosition: 'center',
        margin: '5px'
      }}
    />
  );

AvatarField.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
  dimens: PropTypes.number
};

AvatarField.defaultProps = {
  record: { source: '' },
  dimens: 80
};

export default AvatarField;
