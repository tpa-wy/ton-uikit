import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = ({ ...props }) => {
    return (
        <Svg viewBox="0 0 28 28" {...props}>
            <g transform="translate(2 2)">
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    d="M24,8,21.07,0H2.929L0,8Z"
                    transform="translate(0.5 9.286)"
                />
                <path
                    fill="#fff"
                    d="M0,12.671H9.249l3.94-10.1L4.732,0Z"
                    transform="translate(6.824 0.615)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    d="M9.25,12.671l3.939-10.1L4.732,0,0,12.671Z"
                    transform="translate(6.823 0.615)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    d="M0,.5H15.009"
                    transform="translate(5.004 12.786)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M0,5H24V0H0Z"
                    transform="translate(0.5 17.286)"
                />
            </g>
        </Svg>
    );
};

export default Icon