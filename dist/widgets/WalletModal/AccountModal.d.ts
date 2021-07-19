import React from "react";
interface Props {
    account: string;
    logout: () => void;
    submit: (value: string) => void;
    isFulfilled: boolean;
    onDismiss?: () => void;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
