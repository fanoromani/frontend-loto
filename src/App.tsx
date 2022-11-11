import { BallSorter } from "./components/BallSorter";
import { Sidebar } from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen bg-background md:flex md:items-center">
      <Sidebar />
      <BallSorter />
    </div>
  );
}

export default App;
