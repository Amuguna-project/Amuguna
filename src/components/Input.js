import React from "react";
import styled from "styled-components";

function Input({ width, height, borderRadius = "4px", ...rest }) {
  return (
    <InputStyled
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    />
  );
}

const InputStyled = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid #999;
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 5px;
  outline: none;
`;

export default Input;
