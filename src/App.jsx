import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-primary border p-5">Hello world !!!!!!!!</p>
      <Content />
    </>
  );
}
export default App;
