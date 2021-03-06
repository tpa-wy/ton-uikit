import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

const MyButton = styled(Button)`
  color: #ffffff !important;
  background: #ed3974 !important;
  border-radius: 5px;
`;

const MyButton1 = styled(Button)`
  color: #ed3974 !important;
  background: #ffffff !important;
  border-radius: 5px;
`;
interface Props {
  account?: string;
  connectTitle?: string;
  learnConnect?: string;
  login: Login;
  logout: () => void;
  submit: (value: string) => void;
  isFulfilled: string;
}

const UserBlock: React.FC<Props> = ({
  account,
  connectTitle,
  learnConnect,
  login,
  logout,
  submit,
  isFulfilled,
}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    submit,
    isFulfilled,
    connectTitle,
    learnConnect,
    account
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  return (
    <div>
      {account ? (
        <MyButton1
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </MyButton1>
      ) : (
        <MyButton
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </MyButton>
      )}
    </div>
  );
};

export default UserBlock;
// export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
