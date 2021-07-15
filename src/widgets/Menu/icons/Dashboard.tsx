import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g transform="translate(0.5 0.5)">
        <g>
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            d="M2.507,5.5H.389A.4.4,0,0,1,0,5.094V.406A.4.4,0,0,1,.389,0H2.507A.4.4,0,0,1,2.9.406V5.094A.4.4,0,0,1,2.507,5.5Z"
            transform="translate(3.667 12.833)"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            d="M2.507,13.75H.389A.408.408,0,0,1,0,13.326V.424A.408.408,0,0,1,.389,0H2.507A.408.408,0,0,1,2.9.424v12.9A.408.408,0,0,1,2.507,13.75Z"
            transform="translate(9.167 4.583)"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            d="M2.507,10.083H.389A.426.426,0,0,1,0,9.628V.455A.426.426,0,0,1,.389,0H2.507A.426.426,0,0,1,2.9.455V9.628A.426.426,0,0,1,2.507,10.083Z"
            transform="translate(14.667 8.25)"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            d="M22,13.857v6.851A1.293,1.293,0,0,1,20.708,22H1.292A1.293,1.293,0,0,1,0,20.708V1.292A1.293,1.293,0,0,1,1.292,0H20.708A1.293,1.293,0,0,1,22,1.292V11"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon
