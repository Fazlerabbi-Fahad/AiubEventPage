import React, { useEffect, useState } from "react";
import All from "../../../pages/component-overview/Events/All";
import OngoingEvent from "../../../pages/component-overview/Events/OngoingEvent";
import UpcomingEvent from "../../../pages/component-overview/Events/UpcomingEvent";
import PastEvent from "../../../pages/component-overview/Events/PastEvent";

export default function Tab({ searchTerm }) {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter((item) => {
      const title = item.title ? item.title.toLowerCase() : "";
      const description = item.description
        ? item.description.toLowerCase()
        : "";
      const date = item.date ? item.date.toLowerCase() : "";
      return (
        title.includes(searchTerm.toLowerCase()) ||
        description.includes(searchTerm.toLowerCase()) ||
        date.includes(searchTerm.toLowerCase())
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {currentItems.map((notice) => (
            <All key={notice.id} notice={notice}></All>
          ))}
        </div>

        <ul className="pagination">
          {Array.from(
            { length: Math.ceil(data.length / itemsPerPage) },
            (_, i) => i + 1
          ).map((number) => (
            <li
              key={number}
              className="page-item btn btn-outline btn-sm  text-primary hover:text-white hover:bg-primary hover:border-0 mr-2 max-[600px]:btn-sm justify-end"
            >
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
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
          {data
            .filter((notice) => notice.status === "Ongoing")
            .map((notice) => (
              <OngoingEvent key={notice.id} notice={notice}></OngoingEvent>
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
          {data
            .filter((notice) => notice.status === "Upcoming")
            .map((notice) => (
              <UpcomingEvent key={notice.id} notice={notice}></UpcomingEvent>
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
          {data
            .filter((notice) => notice.status === "Past")
            .map((notice) => (
              <PastEvent key={notice.id} notice={notice}></PastEvent>
            ))}
        </div>
      </div>
    </div>
  );
}
