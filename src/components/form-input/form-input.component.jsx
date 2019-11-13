import React from 'react';

import {
  FormGroup,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroup>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel {...otherProps}>{label}</FormInputLabel> : null}
  </FormGroup>
);

export default FormInput;
