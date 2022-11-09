export const Face = ({ width, height, src }) => {
    return (
      <img
        style={{ borderRadius: "50px" }}
        width={width}
        height={height}
        src={src}
      />
    );
  };