import React, { useState, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTextString, filterRange } from "../Redux/DataSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const { dataArray, status } = useSelector((state) => state.data);

  const inputRef = useRef(null);
  const rangeRef = useRef(null);
  const [textString, setTextString] = useState("");
  const [range, setRange] = useState("");
  const [ascending, setAscending] = useState(true);
  const handleTextString = (e) => {
    console.log(inputRef.current.value);
    dispatch(filterTextString(inputRef.current.value));
    // setTextString(inputRef.current.value);
  };
  const handleRange = () => {
    dispatch(filterRange(inputRef.current.value));
  };
  const handleOrder = () => {};
  //   const filteredJobs = useMemo(() => dataArray.filter((job) => job.startsWith(textString), [textString]));

  return (
    <div className="FilterContainer">
      <div style={{ fontWeight: "700", fontSize: "22px", padding: "5px" }}>Filter Results:</div>
      <div style={{ fontSize: "18px", padding: "5px" }}>Name(Contains)</div>
      <div>
        <input type="text" className="CustomInput" ref={inputRef} onChange={handleTextString} placeholder="Text String" />
      </div>
      <div style={{ fontSize: "18px", padding: "5px" }}>Minimum Score</div>
      <div>
        <input type="number" className="CustomInput" ref={rangeRef} onChange={handleRange} placeholder="1-10" />
      </div>
      <div style={{ fontSize: "18px", padding: "5px" }}>Order By:</div>
      <div style={{ display: "flex" }}>
        <div onClick={handleOrder}>{ascending ? "Arrowup" : "ArrowDown"}</div>
        <select>
          <option value="releaseDate">Release Date</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
