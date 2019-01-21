import './FormErrors.css';
import React from 'react';

const FormErrors = ({errors}) => {
  let uniq_errors = [...new Set(errors)];

  const errorItems = uniq_errors.map((error, i) => (
    <li key={`error-${i}`} className="error-message__item">
      {error}
    </li>
  ));

  return <ul className="error-message">{errorItems}</ul>
};

export default FormErrors;
