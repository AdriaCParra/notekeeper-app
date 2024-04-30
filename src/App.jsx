import { useState } from "react";

import "./App.css";

function App() {
  return <h1>{import.meta.env.VITE_API_BASE_URL}</h1>;
}

export default App;
