import React from "react";

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
      alt={`avatar for user`}
    />
  );
};

export default Avatar;
