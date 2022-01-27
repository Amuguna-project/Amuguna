import React from "react";
import styled, { css } from "styled-components";

function Button({
  variant,
  width,
  height,
  borderRadius = "6px",
  children,
  ...rest
}) {
  return (
    <ButtonStyled
      variant={variant}
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  font-size: 14px;
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: red;
          color: white;
          border: none;
        `;
      case "secondary":
        return css`
          background-color: white;
          color: red;
          border: 1px solid red;
        `;
      default:
        return css``;
    }
  }}
`;

export default Button;
