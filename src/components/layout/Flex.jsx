import React from "react";

function Flex({
  children,
  gap,
  alignItems,
  justifyContent,
  horizen,
  maxWidth,
}) {
  return (
    <div
      style={{
        maxWidth: maxWidth ? maxWidth : "100%",
        margin: maxWidth && "0 auto",
        width: "100%",
        display: "flex",
        gap: gap ? gap : "0",
        alignItems: alignItems ? alignItems : "center",
        justifyContent: justifyContent ? justifyContent : "",
        flexDirection: horizen && "column",
      }}
    >
      {children}
    </div>
  );
}

export default Flex;
