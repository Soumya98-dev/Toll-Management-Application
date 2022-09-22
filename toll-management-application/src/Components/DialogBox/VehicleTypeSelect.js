import React from "react";
import "./Dialog.css";

export default function VehicleTypeSelect() {
  return (
    <>
      <select required>
        <option selected disabled>
          Select vehicle type
        </option>
        <option value="Car/Jeep/Van">Car/Jeep/Van</option>
        <option value="LCV">LCV</option>
        <option value="Truck/Bus">Truck/Bus</option>
        <option value="Truck/Bus">Truck/Bus</option>
      </select>
      
    </>
  );
}
