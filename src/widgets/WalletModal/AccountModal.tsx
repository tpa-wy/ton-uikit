import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";
import Referees from "./Referees";

interface Props {
  account: string;
  logout: () => void;
  submit: (value: string) => void;
  isFulfilled: boolean;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  submit,
  isFulfilled,
  onDismiss = () => null,
}) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginBottom: "8px",
      }}
    >
      {account}
    </Text>
    <Flex mb="16px">
      <LinkExternal
        small
        href={`https://hecoinfo.com/address/${account}`}
        mr="16px"
      >
        View on HecoScan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    {isFulfilled ? <Referees submit={submit} /> : <></>}
    <Flex justifyContent="center">
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

// export default React.memo(
//   AccountModal,
//   (prevProps, nextProps) =>
//     prevProps.account === nextProps.account ||
//     prevProps.isFulfilled === nextProps.isFulfilled
// );
export default AccountModal;
