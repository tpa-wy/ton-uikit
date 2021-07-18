import React from "react";
interface Props {
    account: string;
    logout: () => void;
    submit: (value: string) => void;
    onDismiss?: () => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
