import React, { useContext } from "react";
import { PageContext } from "../Context";

export const Balance = () => {
  const { totalAmount } = useContext(PageContext);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">R${totalAmount}</h1>
    </>
  );
};
