import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, alt, width, height }: SvgIconProps) => (
  <img src={src} alt={alt} width={width} height={height} />
);
