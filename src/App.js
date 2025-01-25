import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./Layouts/Layouts";
import Portfoliya from "./Pages/Portfoliya/Portfoliya";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Portfoliya />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
