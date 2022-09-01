import NextImage, { ImageProps } from "next/image";
import React, { CSSProperties } from "react";
import { StyledImg } from "./Styles/StyledImg";

interface ImgProps extends ImageProps {
  style?: CSSProperties | undefined;
}

const Img = ({ src, layout, width, height, style, ...rest }: ImgProps, ref) => {
  return (
    <StyledImg style={style} ref={ref}>
      <NextImage
        src={src}
        layout={layout}
        width={width}
        height={height}
        {...rest}
      />
    </StyledImg>
  );
};

export default React.forwardRef(Img);
