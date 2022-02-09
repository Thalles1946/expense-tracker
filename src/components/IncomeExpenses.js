import React, { useContext } from "react";
import { PageContext } from "../Context";

export const IncomeExpenses = () => {
  const { income, expense } = useContext(PageContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          R$+{income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          R$-{expense}
        </p>
      </div>
    </div>
  );
};
