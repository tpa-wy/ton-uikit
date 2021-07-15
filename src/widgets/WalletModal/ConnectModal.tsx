import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  connectTitle: string
  learnConnect: string
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, connectTitle, learnConnect }) => (
  <Modal title={connectTitle} onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    <HelpLink
      href="https://docs.hubdao.io/"
      external
    >
      <HelpIcon color="primary" mr="6px" />
      {learnConnect}
    </HelpLink>
  </Modal>
);

export default React.memo(ConnectModal, (prevProps, nextProps) => prevProps.connectTitle === nextProps.connectTitle && prevProps.learnConnect === nextProps.learnConnect);