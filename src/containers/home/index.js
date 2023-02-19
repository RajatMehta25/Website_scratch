import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setDataArray, increment } from "../../Redux/DataSlice";
import Card from "../../components/Card";
import "./index.css";
import Filter from "../../components/Filter";
import { fetchData } from "../../Redux/DataSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { dataArray, status } = useSelector((state) => state.data);

  //   const [data, setData] = useState();
  useEffect(() => {
    // getData();
    dispatch(fetchData());
  }, []);
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(` https://public.connectnow.org.uk/applicant-test`);
  //       console.log(data);
  //       dispatch(setDataArray(data));
  //       //   setData(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  if (status === "loading") {
    return <h1 style={{ color: "white" }}>Loading..</h1>;
  }
  if (status === "error") {
    return <h1 style={{ color: "white" }}>error</h1>;
  }

  return (
    <div className="container">
      <div className="LeftInnerContainer">
        <Filter />
      </div>
      <div className="RightInnerContainer">
        {dataArray.length > 0 ? (
          dataArray.map((ele, i) => <Card key={i} data={ele} />)
        ) : (
          <h2 style={{ color: "white", marginTop: "50px", color: "#c1d1e8" }}>No Data Found !</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
