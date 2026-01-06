import { useState } from "react";
import "./accordian.css";
import data from "./data.js";

const Accordian = () => {
  const [change, setChange] = useState(null);
  const [enalbleMultipleSelection, setEnalbleMultipleSelection] =
    useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getId) {
    setChange(getId === change ? null : getId);
  }

  function handleMultipleSelection(getId) {
    let cpyMultiple = [...multiple];
    const findCurrentIdx = cpyMultiple.indexOf(getId);
    if (findCurrentIdx === -1) cpyMultiple.push(getId);
    else cpyMultiple.splice(findCurrentIdx, 1);
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        <div
          onClick={() => setEnalbleMultipleSelection(!enalbleMultipleSelection)}
          className="selection"
        >
          {enalbleMultipleSelection
            ? " Single Selection"
            : "Enable Muiltple Selection"}
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                onClick={
                  enalbleMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="boxes"
              >
                <div className="header">
                  <h3>{dataItem.question}</h3>
                  <span className="plus">+</span>
                </div>
                {enalbleMultipleSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <p>{dataItem.answer}</p>
                    )
                  : change === dataItem.id && <p>{dataItem.answer}</p>}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
