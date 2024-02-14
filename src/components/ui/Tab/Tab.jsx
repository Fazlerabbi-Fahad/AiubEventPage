import React, { useEffect, useState } from "react";
import "../../../assets/styles.css";
import All from "../../../pages/component-overview/Events/All";

export default function Tab() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("../../../../public/data.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    fetchData();
  }, []);
  return (
    <div role="tablist" className="tabs tabs-lifted tabs-xl">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        style={{ color: "#034EA1", fontWeight: 700 }}
        aria-label="All"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-5 md:p-10">
        <div className="grid grid-cols-1">
          {data.map((notice) => (
            <All key={notice.id} notice={notice}></All>
          ))}
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        style={{ color: "#034EA1", fontWeight: 700 }}
        aria-label="Ongoing"
      />
      <div role="tabpanel" className="tab-content p-5 md:p-10">
        <div className="grid grid-cols-1">
          {data.map((notice) => (
            <All key={notice.id} notice={notice}></All>
          ))}
        </div>
      </div>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        style={{ color: "#034EA1", fontWeight: 700 }}
        aria-label="Upcoming"
      />
      <div role="tabpanel" className="tab-content p-5 md:p-10">
        <div className="grid grid-cols-1">
          {data.map((notice) => (
            <All key={notice.id} notice={notice}></All>
          ))}
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        style={{ color: "#034EA1", fontWeight: 700 }}
        aria-label="Past"
      />
      <div role="tabpanel" className="tab-content p-5 md:p-10">
        <div className="grid grid-cols-1">
          {data.map((notice) => (
            <All key={notice.id} notice={notice}></All>
          ))}
        </div>
      </div>
    </div>
  );
}
