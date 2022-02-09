import React, { useContext, useState } from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { PageContext } from "../Context";

export const AddTransaction = () => {
  const {
    setUser,
    setIncome,
    setExpense,
    setTotalAmount,
    setExpenser,
    expenser,
  } = useContext(PageContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function OnClick(event) {
    event.preventDefault();
    if (!expenser) {
      setIncome((prevState) => prevState + amount);
      setTotalAmount((prevState) => prevState + amount);
    }
    if (expenser) {
      setExpense((prevState) => prevState + amount);
      setTotalAmount((prevState) => prevState - amount);
    }
    setUser((prevState) => [...prevState, { text, amount, expenser }]);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="htmlForm">
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(parseFloat(event.target.value))}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "center" }}
          alignItems="center"
        >
          <Typography sx={{ color: "green" }}>Income</Typography>
          <Switch
            onChange={(event) => setExpenser(event.target.checked)}
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography sx={{ color: "red" }}>Expense</Typography>
        </Stack>
        <button onClick={OnClick} className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};
