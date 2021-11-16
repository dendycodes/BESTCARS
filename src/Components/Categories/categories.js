import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./categories.scss";
import "../../App.scss";
import Footer from "../Footer/footer";
import Categorycard from "../Categorycard/category-card";

import Loading from "../Loading/loading";
import { slectedCar } from "../../Globalselectedcar";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loadingstatus, setLoadingstatus] = useState(false);
  const [selectedcar, setSelectedcar] = useContext(slectedCar);
  useEffect(() => {
    setLoadingstatus(true);

    const commentUrl = `http://localhost:4000/getCategories`;

    axios
      .get(commentUrl)
      .then((res) => {
        setCategories(res.data);
        setLoadingstatus(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loadingstatus === true) {
    return (
      <div id="productdetails">
        <Loading />
      </div>
    );
  }

  return (
    <div className="categories top">
      <div className="category-content">
        <div className="main-section">
          <div className="container">
            <div className="category-grid">
              {categories.map((c) => {
                return (
                  <Categorycard
                    function={() => {
                      setSelectedcar((selectedcar) => [
                        selectedcar[0],
                        selectedcar[1],
                        selectedcar[2],
                        {
                          categoryID: c._id,
                          categoryName: c.categoryName
                        }
                      ]);
                      console.log(selectedcar);
                    }}
                    to={c._id}
                    key={c._id}
                    id={c._id}
                    categoryName={c.categoryName}
                    picURL={c.categoryPicture}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
