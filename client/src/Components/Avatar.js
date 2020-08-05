import React from "react";
import styled from "styled-components";

const Avatar = ({ size, avatarSrc }) => {
  return (
    <img
      src={avatarSrc}
      style={{
        borderRadius: "50%",
        height: size,
        width: size,
        margin: "10px",
      }}
    />
  );
};

export default Avatar;
