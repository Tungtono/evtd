import Home from "./compoments/Home";
import CreateEvent from "./compoments/CreateEvent";
import EventDetails from "./compoments/EventDetails";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<EventDetails />} />
      </Routes>
    </div>
  );
}
export default App;
