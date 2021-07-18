import React, { useState } from "react";
import styled from "styled-components";

const Referee = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
`;

const TheInput = styled.input`
  color: rgb(0, 0, 0);
  position: relative;
  font-weight: 500;
  outline: none;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
  flex: 1;
  border-radius: 4px;
  border: 1px solid;
  padding: 5px;
  appearance: textfield;
`;

const Btn = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  background-color: #00c5df;
  color: #fff;
`;

interface Props {
  submit: (value: string) => void;
}

const AccountModal: React.FC<Props> = ({ submit }) => {
  const [value, SetValue] = useState("");

  return (
    <Referee>
      Referees:
      <TheInput value={value} onChange={(e) => SetValue(e.target.value)} />
      <Btn onClick={() => submit(value)}>Submit</Btn>
    </Referee>
  );
};

export default AccountModal;
