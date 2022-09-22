import React from "react";
import "./Dialog.css";
import VehicleTypeSelect from "./VehicleTypeSelect";

function VehicleEntryDialog({ showAddEntry, toggleAddEntry }) {
  return (
    <>
      {showAddEntry && (
        <form className="add-toll-form add-vehicle-entry">
          <i class="fa-solid fa-xmark cross-icon" onClick={toggleAddEntry}></i>
          <h3>Add new entry</h3>
          Select toll name:
          <label htmlFor="tollName" className="required" />
          <br />
          <select required>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Chengalpattu">Chengalpattu</option>
          </select>
          <br />
          Select vehicle type
          <label htmlFor="vehicletype" className="required" />
          <br />
          <VehicleTypeSelect />
          <br />
          Vehicle Number
          <label htmlFor="vehiclenumber" className="required" />
          <br />
          <input type="text" placeholder="Enter your login id" />
          <br />
          Tariff
          <label htmlFor="tariff" className="required" />
          <br />
          <input type="number" placeholder="Tariff amount" />
          <button>Add entry</button>
        </form>
      )}
    </>
  );
}

export default VehicleEntryDialog;
