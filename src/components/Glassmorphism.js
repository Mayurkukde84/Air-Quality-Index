import "./Glassmorphism.scss";
import Location from "../Location";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
function Glassmorphism() {
  const [aqindex, setUsers] = useState([]);
  const usersCollectonRef = collection(db, "aqindex");

  useEffect(() => {
    const getaqindex = async () => {
      const data = await getDocs(usersCollectonRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getaqindex();
  }, );
  return (
    <div>
      {aqindex.map((aqindex) => {
        return (
          <>
            <Location />

            <div className="box-container">
              <div className="box1">
                <div className="input">{aqindex.air}</div>
                <h5>Air Quality Index</h5>
              </div>
              <div className="box2">
                <div className="input">{aqindex.humidity}</div>
                <h5> Humidity</h5>
              </div>
              <div className="box3">
                <div className="input">{aqindex.temprature}</div>
                <h5>Wind</h5>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Glassmorphism;
