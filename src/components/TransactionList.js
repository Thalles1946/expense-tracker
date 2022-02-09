import React, { useContext } from "react";
import { PageContext } from "../Context";

export const TransactionList = () => {
  const { user, setUser } = useContext(PageContext);

  const onDeleteObject = (name) => {
    const users = user.filter((user) => user.text !== name);
    setUser(users);
    console.log("rodou");
  };

  // function Remove({ Id }) {
  //   const newList = user.filter((item) => item.text !== Id);
  //   setUser(newList);
  // }

  return (
    <div>
      <h3>History</h3>
      <div style={{ maxHeight: "100px", overflow: "auto" }}>
        {user.reverse().map((item) => {
          if (item.amount >= 0) {
            return (
              <div key={item.text}>
                <ul id="list" className="list">
                  <li className="minus">
                    <button
                      onClick={() => onDeleteObject(item.text)}
                      className="delete-btn"
                    >
                      x
                    </button>
                    {item.text} <span>{item.amount}</span>
                  </li>
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
