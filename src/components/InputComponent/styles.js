import styled, { css } from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 1.5rem + 2px);
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8492a6;
  background-color: #fff;
  background-clip: padding-box;
  border: none !important;
  border-left: 2px solid var(--primary-color) !important;
  border-bottom: 1px solid #f0f0f4 !important;
  border-radius: 2px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  margin-bottom: -5px;

  ${(props) =>
    props.error &&
    css`
      border-left: 2px solid var(--danger-color) !important;
    `}

  &:focus {
    color: #8492a6;
    background-color: #fff;
    border-color: #05aaff;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(31, 45, 61, 0.075), 0 0 20px rgba(5, 170, 255, 0.1);
    box-shadow: inset 0 1px 1px rgba(31, 45, 61, 0.075), 0 0 20px rgba(5, 170, 255, 0.1);
  }
`;

export const Error = styled.span`
  font-size: 13px;
  font-weight: bold;
  background: var(--danger-color);
  color: #fff !important;
  padding: 0 5px;
`;
