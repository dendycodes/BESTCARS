import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import car from "./car.png";
import Footer from "../Footer/footer";
import "./auto.scss";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import Categories from "../Categories/categories";
import { globalState } from "../../Globalstate";
import { slectedCar } from "../../Globalselectedcar";

export default function Auto() {
  const [, /*carsquantity*/ setCarsquantity] = useContext(globalState);
  const [makes, setMakes] = useState([]);
  const [model, setModel] = useState([]);
  const [modification, setModification] = useState([]);
  const [imgstate, setImgstate] = useState("car-image-loaded");
  const [select1status, setSelect1status] = useState(true);
  const [select2status, setSelect2status] = useState(true);
  const [select3status, setSelect3status] = useState(true);
  const [selectedmake, setSelectedmake] = useState({
    makeID: "",
    makeName: "",
    pictureURL: ""
  });
  const [selectedmodel, setSelectedmodel] = useState({
    modelID: "",
    modelName: ""
  });
  const [selectedmod, setSelectedmod] = useState({
    modificationID: "",
    engine: "",
    fuel: "",
    year: "",
    power: ""
  });

  const [selectedcar, setSelectedcar] = useContext(slectedCar);
  const time = 10000;

  // Getting all the Makes
  useEffect(() => {
    setImgstate("car-image-loading");
    const commentUrl = `http://localhost:4000/allcars`;

    const interval = setInterval(() => {
      axios
        .get(commentUrl)
        .then((res) => {
          setMakes(res.data);
          setImgstate("car-image-loaded");
          setSelect1status(false);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, time);

    axios
      .get(commentUrl)
      .then((res) => {
        setMakes(res.data);
        setImgstate("car-image-loaded");
        setSelect1status(false);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => clearInterval(interval);
  }, []);

  //Getting all the models of given make
  useEffect(() => {
    setSelectedmodel("");
    setImgstate("car-image-loading");
    const commentUrl = `http://localhost:4000/models`;
    axios
      .get(commentUrl, {
        params: { makeID: selectedmake.makeID }
      })
      .then((res) => {
        setModel(res.data);
        setImgstate("car-image-loaded");

        if (res.data.length > 0) {
          setSelect2status(false);
        } else {
          setSelect2status(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedmake.makeID]);

  //Getting all the modification
  useEffect(() => {
    setImgstate("car-image-loading");
    const commentUrl = `http://localhost:4000/getModifications`;
    axios
      .get(commentUrl, {
        params: { modelID: selectedmodel.modelID }
      })
      .then((res) => {
        setModification(res.data);

        setImgstate("car-image-loaded");

        if (res.data.length > 0) {
          setSelect3status(false);
        } else {
          setSelect3status(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedmodel.modelID]);

  //Checkings ----------------------------------------

  const submitData = (e) => {
    e.preventDefault();
    const selectedcar = [selectedmake, selectedmodel, selectedmod];
    setSelectedcar(selectedcar);
    setCarsquantity(1);
  };

  if (selectedcar[0].makeID.length > 0) {
    return <Categories />;
  }
  return (
    <div className="auto">
      <div className="selector">
        <h1>
          Намерете части за вашия автомобил <br />{" "}
          <p>Над стотици марки и десетки хиляди части</p>
        </h1>

        <form className="select-car" onSubmit={submitData}>
          <img alt="car" className={imgstate} src={car} />
          <div className="select">
            <select
              required
              defaultValue=""
              id="select-make"
              disabled={select1status}
              onChange={(e) => {
                setSelectedmake({
                  makeID: e.target.value,
                  makeName: e.target[e.target.selectedIndex].text,
                  pictureURL:
                    e.target[e.target.selectedIndex].getAttribute("id")
                });
              }}
            >
              <option value="" disabled="disabled">
                Изберете марка на автомобил
              </option>
              {makes.map((make) => {
                return (
                  <option key={make._id} value={make._id} id={make.pictureURL}>
                    {make.make}{" "}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="select">
            <select
              required
              defaultValue=""
              disabled={select2status}
              onChange={(e) => {
                setSelectedmodel({
                  modelID: e.target.value,
                  modelName: e.target[e.target.selectedIndex].text
                });
              }}
            >
              <option value="">Изберете модел на автомобил</option>
              {model.map((model) => {
                return (
                  <option key={model._id} value={model._id}>
                    {" "}
                    {model.model}{" "}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="select">
            <select
              required
              onChange={(e) => {
                var select = e.target[e.target.selectedIndex].text;

                setSelectedmod({
                  modificationID: e.target.value,
                  engine: select.split("/")[0],
                  power: select.split("/")[1],
                  fuel: select.split("/")[2],
                  year: select.split("/")[3]
                });
              }}
              disabled={select3status}
              defaultValue=""
            >
              <option value="">Изберете модификация на автомобил</option>

              {modification.map((modification) => {
                return (
                  <option key={modification._id} value={modification._id}>
                    {modification.engine}
                    {" / "}
                    {modification.horsepower + "HP-" + modification.kw + "KW"}
                    {" / "}
                    {modification.fuel}
                    {" / "} {modification.year}
                  </option>
                );
              })}
            </select>
          </div>

          <button type="submit" to="/categories" id="select-car-button">
            <Icon
              path={mdiMagnify}
              title="search"
              size={1.5}
              color="rgb(255,255,255)"
            />
            Търсене
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
