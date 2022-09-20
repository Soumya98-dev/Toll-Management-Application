import React from "react";

function VehicleLogs({ data }) {
  return (
    <table className="vehicle-logs">
      <tr className="table-headers">
        <th>VEHICLE TYPE</th>
        <th>VEHICLE NUMBER</th>
        <th>DATE/TIME</th>
        <th>TOLL NAME</th>
        <th>TARIFF</th>
      </tr>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.vehicleType}</td>
          <td>{item.vehicleNo}</td>
          <td>{item.dateTime}</td>
          <td>{item.tollName}</td>
          <td>{item.tariff}</td>
        </tr>
      ))}
    </table>
  );
}

export default VehicleLogs;
