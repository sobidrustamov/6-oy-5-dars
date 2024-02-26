import React from "react";
import { CardContainer } from "./components/card-container";

function App() {
  return (
    <div className="container px-[100px]">
      <h1 className="text-[36px] text-center">Todos</h1>

      <CardContainer />
    </div>
  );
}

export default App;
