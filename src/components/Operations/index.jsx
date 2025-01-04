import { useState } from "react";
import { FiUserX } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { PiExportBold } from "react-icons/pi";
import "./index.css";

const Operations = () => {
  const [currentOperation, setCurrentOperation] = useState(1);

  const operations = [
    {
      id: 1,
      title: "Instant Transfers",
      content: "Tranfser money to anyone, instantly! No fees, no BS.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <PiExportBold className="icon" />,
      background: "var(--color-secondary-opacity)",
      color: "var(--color-secondary)",
    },
    {
      id: 2,
      title: "Instant Loans",
      content: "Buy a home or make your dreams come true, with instant loans.",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      icon: <AiOutlineHome className="icon" />,
      background: "var(--color-primary-opacity)",
      color: "var(--color-primary)",
    },
    {
      id: 3,
      title: "Instant Closing",
      content: "No longer need your account? No problem! Close it instantly.",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <FiUserX className="icon" />,
      background: " var(--color-tertiary-opacity)",
      color: "var(--color-tertiary)",
    },
  ];

  const changeOperation = (operationId) => {
    setCurrentOperation(operationId);
  };

  return (
    <section id="operations">
      <h2>Operations</h2>
      <p>Everything as simple as possible, but no simpler.</p>
      <div className="container operation__container">
        <div className="content">
          <div className="buttons">
            {operations.map((operation) => (
              <button
                key={operation.id}
                onClick={() => changeOperation(operation.id)}
                className={`operation__btn btn ${
                  currentOperation === operation.id ? "active" : ""
                }`}
              >
                {operation.title}
              </button>
            ))}
          </div>
          {operations.map(
            (operation) =>
              currentOperation === operation.id && (
                <div key={operation.id} className="item">
                  <div className="content__item">
                    <div
                      style={{
                        backgroundColor: operation.background,
                        color: operation.color,
                      }}
                      className="icon__box"
                    >
                      {operation.icon}
                    </div>
                    <h4>{operation.content}</h4>
                  </div>
                  <div className="info">
                    <p>{operation.desc}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Operations;
