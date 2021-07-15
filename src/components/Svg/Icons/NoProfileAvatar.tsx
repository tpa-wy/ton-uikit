import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 38 38" {...props}>
      <defs>
        <clipPath id="#clip-path-icon">
          <circle cx="17.5" cy="17.5" r="17.5" fill="none" />
        </clipPath>
      </defs>
      <g transform="translate(-1858.5 -17.5)">
        <g transform="translate(1859 18)">
          <circle cx="18.5" cy="18.5" r="18.5" fill="#d8d8d8" stroke="#d8d8d8" strokeMiterlimit="10" strokeWidth="1" />
        </g>
        <g transform="translate(1860 19)">
          <circle cx="17.5" cy="17.5" r="17.5" fill="none" />
          <g clipPath="url(#clip-path-icon)">
            <g transform="translate(6 8)">
              <circle cx="5.5" cy="5.5" r="5.5" transform="translate(6)" fill="#fff" />
              <rect width="23" height="25" rx="11.5" transform="translate(0 10)" fill="#fff" />
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
