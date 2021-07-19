import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  submit: (value: string) => void,
  isFulfilled: boolean,
  connectTitle?: string,
  learnConnect?: string,
  account?: string
): ReturnType => {
  const [onPresentConnectModal] = useModal(
    <ConnectModal
      login={login}
      connectTitle={connectTitle || ""}
      learnConnect={learnConnect || ""}
    />
  );
  const [onPresentAccountModal] = useModal(
    <AccountModal
      account={account || ""}
      logout={logout}
      submit={submit}
      isFulfilled={isFulfilled}
    />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
