import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Footer from "../Footer/footer";
// import { Link } from "react-router-dom";
import Card from "../Card/card";
import "./categorydetails.scss";
import Notfound from "../NotFound/notfound";
import Loading from "../Loading/loading";
import { slectedCar } from "../../Globalselectedcar";
export default function Categorydetails() {
  const [autoparts, setAutoparts] = useState([{ part: "none" }]);
  const [loadingstatus, setLoadingstatus] = useState(false);
  const [selectedcar /*setSelectedcar*/] = useContext(slectedCar);

  useEffect(() => {
    setLoadingstatus(true);
    let url = `http://localhost:4000/getAutoparts`;
    axios
      .get(url, {
        params: {
          categoryID: selectedcar[3].categoryID,
          modelID: selectedcar[1].modelID,
          makeID: selectedcar[0].makeID,
          modificationID: selectedcar[2].modificationID
        }
      })
      .then((res) => {
        setAutoparts(res.data);
        setLoadingstatus(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedcar]);

  if (autoparts.length === 0) {
    return <Notfound />;
  }

  return (
    <div className="categories top">
      <div className="main">
        <div className="Products">
          {loadingstatus === false ? (
            <div className="container">
              <div className="grid">
                {autoparts.map((part) => {
                  return (
                    <Card
                      key={part._id}
                      to={part._id}
                      autoPartName={part.autoPartName}
                      pictureURL={part.pictureURL}
                      manufacturer={part.manufacturer}
                      price={part.price}
                      infoDetail={part.infoDetail}
                      partNumber={part.partNumber}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
