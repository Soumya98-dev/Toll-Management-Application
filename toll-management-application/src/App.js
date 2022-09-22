import React from "react";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const [query, setQuery] = React.useState("");
  const [showAddToll, setShowAddToll] = React.useState(false);
  const [showAddEntry, setShowAddEntry] = React.useState(false);

  return (
    <div>
      <HomePage
        query={query}
        setQuery={setQuery}
        showAddToll={showAddToll}
        setShowAddToll={setShowAddToll}
        showAddEntry={showAddEntry}
        setShowAddEntry={setShowAddEntry}
      />
    </div>
  );
}

export default App;
