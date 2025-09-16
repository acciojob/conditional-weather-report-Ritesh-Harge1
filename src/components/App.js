import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  // Hardcoded weather input
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
