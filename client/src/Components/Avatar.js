import React from "react";
import styled from "styled-components";

const Avatar = ({ size, avatarSrc, margin, border }) => {
  return (
    <img
      src={avatarSrc}
      style={{
        borderRadius: "50%",
        height: size,
        width: size,
        border: border,
        margin: margin,
        zIndex: 1,
      }}
    />
  );
};

export default Avatar;
