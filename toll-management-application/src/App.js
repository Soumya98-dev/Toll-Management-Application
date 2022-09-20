import React from "react";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const [query, setQuery] = React.useState("");
  return (
    <div>
      <HomePage query={query} setQuery={setQuery} />
    </div>
  );
}

export default App;
