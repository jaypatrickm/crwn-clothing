import styled, { css } from 'styled-components';

const $subColor = 'grey';
const $mainColor = 'black';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${$mainColor};
`;

const getShrinkLabel = props => {
  if (props.value.length) {
    return shrinkLabel;
  }
};

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputLabel = styled.label`
  color: ${$subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${getShrinkLabel}
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${$subColor};
  margin: 25px 0;
  letter-spacing: ${props => (props.type === 'password' ? '0.3em' : '')};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel}
  }
`;
