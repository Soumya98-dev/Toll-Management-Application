import React from "react";
import "./HomePage.css";
import { tollEntries } from "../../tollentries";
import VehicleLogs from "../Vehicle Logs/VehicleLogs";
import Dialog from "../DialogBox/Dialog";
import VehicleEntryDialog from "../DialogBox/VehicleEntryDialog";
// import VehicleTypeSelect from "../DialogBox/VehicleTypeSelect";

function HomePage({
  query,
  setQuery,
  showAddToll,
  setShowAddToll,
  showAddEntry,
  setShowAddEntry,
}) {
  const keys = ["vehicleType", "vehicleNo", "tollName"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const toggleAddEntry = () => {
    setShowAddEntry((prevShowAddEntry) => !prevShowAddEntry);
  };

  const toggleAdd = () => {
    setShowAddToll((prevShowAddToll) => !prevShowAddToll);
  };

  return (
    <div className="homepage">
      <h1>Toll Management Application</h1>
      <div className="toll-operations">
        <div className="toll-operations-1">
          <h3>
            <strong>Toll entries/Vehicle entries</strong>
          </h3>
          <i className="fa-solid fa-filter filter"></i>{" "}
          <i className="fa-solid fa-magnifying-glass search"></i>
          <input
            type="text"
            placeholder="Search Vehicle"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="toll-operations-2">
          <button onClick={toggleAddEntry}>Add vehicle entry</button>
          <button onClick={toggleAdd}>Add new toll</button>
          <button>View all tolls</button>
        </div>
        <Dialog showAddToll={showAddToll} toggleAdd={toggleAdd} />
        <VehicleEntryDialog
          showAddEntry={showAddEntry}
          toggleAddEntry={toggleAddEntry}
        />
      </div>
      <VehicleLogs data={search(tollEntries)} />
    </div>
  );
}

export default HomePage;
