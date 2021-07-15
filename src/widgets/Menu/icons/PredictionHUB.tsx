import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = ({ ...props }) => {
    return (
        <Svg viewBox="0 0 28 28" {...props}>
            <g transform="translate(9 9)">
                <path
                    fill="#fff"
                    d="M3.454,3.293,0,3.82,2.5,6.382,1.909,10,5,8.292,8.091,10,7.5,6.382,10,3.82,6.545,3.293,5,0Z"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    d="M5,0,6.545,3.293,10,3.82,7.5,6.382,8.091,10,5,8.291,1.909,10,2.5,6.382,0,3.82l3.454-.528Z"
                />
            </g>
            <g transform="translate(2 2)">
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    d="M0,11C0,4.925,5.373,0,12,0"
                    transform="translate(0.455 0.648)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    d="M12,0C12,6.075,6.627,11,0,11"
                    transform="translate(11.455 12.648)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeDasharray="3 3"
                    d="M0,0C6.627,0,12,4.925,12,11"
                    transform="translate(11.455 0.648)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeDasharray="3 3"
                    d="M12,11C5.373,11,0,6.075,0,0"
                    transform="translate(0.455 12.648)"
                />
            </g>
        </Svg>
    );
};

export default Icon