import React, { useState, createContext } from "react";
export const PageContext = createContext();
const PageContextProvider = (props) => {
  const [user, setUser] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expenser, setExpenser] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <PageContext.Provider
      value={{
        user: user,
        setUser: setUser,
        income: income,
        setIncome: setIncome,
        expense: expense,
        setExpense: setExpense,
        totalAmount: totalAmount,
        setTotalAmount: setTotalAmount,
        expenser: expenser,
        setExpenser: setExpenser,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
