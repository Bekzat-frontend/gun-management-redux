import React from "react";
import styled from "styled-components";

export const Button = ({ children, variant, ...rest }) => {
  const BUTTON_VARIANTS = {
    danger: {
      bg: "#0fb2e8",
      hover: "red",
    },
    primary: {
      bg: "red",
      hover: "green",
    },
  };

  const variantStyles = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary;

  return (
    <StyledButton
      {...rest}
      style={{
        backgroundColor: variantStyles.bg,
        color: "white",
        padding: "5px 15px",
        marginLeft: "10px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        transition: "0.3s ease-in",
      }}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = variantStyles.hover)
      }
      onMouseOut={(e) => (e.target.style.backgroundColor = variantStyles.bg)}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button``;
