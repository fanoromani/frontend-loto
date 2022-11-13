import { useEffect, useState } from "react";
import { api } from "./lib/axios";
import { BallSorter } from "./components/BallSorter";
import { Sidebar } from "./components/Sidebar";
import "./index.css";

function App() {
  const [raffles, setRaffles] = useState();
  const [raffleData, setRaffleData] = useState();
  const [raffleNumbers, setRaffleNumbers] = useState();
  const [raffleID, setRaffleID] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const callApi = async () => {
      try {
        const [rafflesResponse, raffleDataResponse, raffleNumbersResponse] =
          await Promise.all([
            api.get("loterias"),
            api.get("loterias-concursos"),
            api.get("concursos/440"),
          ]);
        setRaffles(rafflesResponse.data);
        setRaffleData(raffleDataResponse.data);
        setRaffleNumbers(raffleNumbersResponse.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    callApi();
  }, []);

  return (
    <div className="w-screen h-screen bg-background md:flex md:items-center">
      {!loading && (
        <Sidebar
          raffles={raffles}
          raffleData={raffleData}
          setRaffleID={setRaffleID}
        />
      )}
      {!loading && <BallSorter />}
    </div>
  );
}

export default App;
