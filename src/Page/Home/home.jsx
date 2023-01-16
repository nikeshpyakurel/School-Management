import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
const RFIDData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`${config.SERVER_URL}/rfid`);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>RFID Data</h1>
      {data.map((rfid) => (
        <div key={rfid._id}>{rfid.uid}</div>
      ))}
    </div>
  );
};

export default RFIDData;
