import React from "react";
import VehicleTypeSelect from "./VehicleTypeSelect";
import "./Dialog.css";

function Dialog({ showAddToll, toggleAdd }) {
  return (
    <>
      {showAddToll && (
        <form className="add-toll-form">
          <i class="fa-solid fa-xmark cross-icon" onClick={toggleAdd}></i>
          <h3>Add new toll</h3>
          <strong>Toll Name:</strong>
          <label htmlFor="tollName" className="required" />
          <br />
          <input
            type="text"
            placeholder="Enter toll name"
            id="tollName"
            required
          />
          <br />
          <strong>Vehicle fare details</strong>
          <label className="required" htmlFor="vehicleFare" />
          <br />
          <VehicleTypeSelect />
          <input type="number" placeholder="Single journey" required />
          <input type="number" placeholder="Return journey" required />
          <br />
          <VehicleTypeSelect />
          <input type="number" placeholder="Single journey" required />
          <input type="number" placeholder="Return journey" required />
          <br />
          <VehicleTypeSelect />
          <input type="number" placeholder="Single journey" required />
          <input type="number" placeholder="Return journey" required />
          <br />
          <VehicleTypeSelect />
          <input type="number" placeholder="Single journey" required />
          <input type="number" placeholder="Return journey" required />
          <br />
          <button>Add details</button>
        </form>
      )}
    </>
  );
}

export default Dialog;
