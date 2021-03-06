import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, submit: (value: string) => void, isFulfilled: string, connectTitle?: string | undefined, learnConnect?: string | undefined, account?: string | undefined) => ReturnType;
export default useWalletModal;
