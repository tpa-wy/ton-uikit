import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    connectTitle?: string;
    learnConnect?: string;
    login: Login;
    logout: () => void;
    submit: (value: string) => void;
    isFulfilled: boolean;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
