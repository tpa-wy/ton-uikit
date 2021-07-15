import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = ({ ...props }) => {
    return (
        <Svg viewBox="0 0 28 28" {...props}>
            <defs>
                <clipPath id="clip-path8">
                    <path
                        fill="none"
                        d="M0,22.805H23.93V0H0Z"
                        transform="translate(0 0)"
                    />
                </clipPath>
            </defs>
            <g transform="translate(2 3)">
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    d="M17.488,0s-2.94,4.883-5.019,6.81-2.72.438-5.645-.418S0,11.178,0,11.178"
                    transform="translate(1.419 0.632)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    d="M0,.984,3.757,0l.755,3.52"
                    transform="translate(15.196 0.617)"
                />
                <path
                    fill="none"
                    d="M0,22.805H23.93V0H0Z"
                    transform="translate(0 0)"
                />
                <g clipPath="url(#clip-path8)">
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        d="M0,5.07H3.355V0H0Z"
                        transform="translate(3.652 17.235)"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        d="M0,8.16H3.355V0H0Z"
                        transform="translate(10.849 14.145)"
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        d="M0,14.163H3.355V0H0Z"
                        transform="translate(17.828 8.142)"
                    />
                    <g transform="translate(0 21.805)">
                        <path fill="#fff" d="M0,.5H23.93" transform="translate(0 0)" />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            d="M0,.5H23.93"
                            transform="translate(0 0)"
                        />
                    </g>
                </g>
            </g>
        </Svg>
    );
};

export default Icon