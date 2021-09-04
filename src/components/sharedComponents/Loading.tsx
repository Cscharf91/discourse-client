import { Spin } from "antd";
import React from "react";

interface LoadingProps {
  message: string;
  minHeight: string;
}

const Loading = ({ message, minHeight }: LoadingProps) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: minHeight ? minHeight : "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin />
      <br />
      <h3
        style={{
          color: "darkgray",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        {message ? message : "Loading..."}
      </h3>
    </div>
  );
};

export default Loading;