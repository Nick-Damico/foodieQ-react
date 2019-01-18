import React from 'react';
import { Col } from 'reactstrap';

const FormErrors = ({errors}) => {
  let uniq_errors = [...new Set(errors)];

  const errorItems = uniq_errors.map((error, i) => (
    <li key={`error-${i}`} className="error-message__item">
      {error}
    </li>
  ));

  return (
    <Col xs={{ size: 12 }}>
      <ul className="error-message">{errorItems}</ul>
    </Col>
  );
};

export default FormErrors;
