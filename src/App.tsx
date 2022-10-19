import { BallSorter } from "./components/BallSorter";
import { Sidebar } from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="bg-background flex">
      <Sidebar />
      <BallSorter />
    </div>
  );
}

export default App;
