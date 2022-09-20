import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <h1>Toll Management Application</h1>
      {/* <hr></hr> */}
      <div className="toll-operations">
        <div className="toll-operations-1">
          <h3>
            <strong>Toll entries/Vehicle entries</strong>
          </h3>
          <i className="fa-solid fa-filter filter"></i>{" "}
          <i className="fa-solid fa-magnifying-glass search"></i>
          <input type="text" placeholder="Search vehicle" />
        </div>
        <div className="toll-operations-2">
          <button>Add vehicle entry</button>
          <button>Add new toll</button>
          <button>View all tolls</button>
        </div>
      </div>
      <table className="vehicle-logs">
        <tr className="table-headers">
          <th>VEHICLE TYPE</th>
          <th>VEHICLE NUMBER</th>
          <th>DATE/TIME</th>
          <th>TOLL NAME</th>
          <th>TARIFF</th>
        </tr>
        <tr>
          <td>Car/Jeep/Van</td>
          <td>TN24AQ4644</td>
          <td>09/09/2022, 16:43:48</td>
          <td>Chengalpattu</td>
          <td>60</td>
        </tr>
        <tr>
          <td>Car/Jeep/Van</td>
          <td>TN19QQ1234</td>
          <td>09/09/2022, 15:30:34</td>
          <td>Kappalur</td>
          <td>75</td>
        </tr>
        <tr>
          <td>Heavy Vehicle</td>
          <td>TN24AA1234</td>
          <td>09/09/2022, 12:12:34</td>
          <td>Kappalur</td>
          <td>400</td>
        </tr>
      </table>
    </div>
  );
}

export default HomePage;
