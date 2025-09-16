import React, { useState } from "react";

function App() {
  // Hardcoded weather input
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  // Inline style for temperature
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      {/* First p tag for temperature */}
      <p>
        Temperature: <span style={tempStyle}>{weather.temperature}</span>
      </p>

      {/* Second p tag for conditions */}
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default App;
