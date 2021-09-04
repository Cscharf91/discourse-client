import React from "react";

interface FlexboxProps {
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  direction?:
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "column"
    | "column-reverse"
    | "row"
    | "row-reverse"
    | undefined;
  justify?: string;
  align?: string;
  gap?: string;
  children?: React.ReactNode;
}

const Flexbox = ({
  style,
  width,
  height,
  direction,
  justify,
  align,
  gap,
  children,
}: FlexboxProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: width ? width : "100%",
        height: height ? height : "100%",
        flexDirection: direction && direction,
        justifyContent: justify ? justify : "center",
        alignItems: align ? align : "center",
        gap: gap ? gap : "0",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flexbox;
