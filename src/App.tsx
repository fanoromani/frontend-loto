import { useEffect, useState } from "react";
import { api } from "./lib/axios";
import { BallSorter } from "./components/BallSorter";
import { Sidebar } from "./components/Sidebar";
import "./index.css";
import { RaffleDataProps, RaffleProps, RaffleNumbersProps } from "./types";

function App() {
  const [raffles, setRaffles] = useState<RaffleProps[]>([]);
  const [raffleData, setRaffleData] = useState<RaffleDataProps[]>([]);
  const [raffleNumbers, setRaffleNumbers] = useState<RaffleNumbersProps>({
    data: "",
    id: "",
    loteria: 0,
    numeros: ["", ""],
  });
  const [raffleID, setRaffleID] = useState<string>("");
  const [numbersID, setNumbersID] = useState<string>("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const callApi = async () => {
      try {
        const [rafflesResponse, raffleDataResponse] = await Promise.all([
          api.get("loterias"),
          api.get("loterias-concursos"),
        ]);
        setRaffles(rafflesResponse.data);
        setRaffleData(raffleDataResponse.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    callApi();
  }, []);

  useEffect(() => {
    setError(false);
    const callApi2 = async () => {
      if (numbersID) {
        try {
          const raffleNumbersResponse = await api.get(`concursos/${numbersID}`);
          setRaffleNumbers(raffleNumbersResponse.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    callApi2();
  }, [numbersID]);

  console.log(raffleID, "ID");
  console.log(numbersID, "numID");
  console.log(raffleNumbers, "sam");

  const handleRaffleSelect = (raffleID: string) => {
    if (raffleID !== "" && raffleData) {
      setNumbersID(
        raffleData.find((e) => e.loteriaId === parseInt(raffleID))
          ?.concursoId || ""
      );
      setRaffleID(raffleID);
    }
  };

  return (
    <div className="w-screen h-screen bg-background md:flex md:items-center">
      {!loading && (
        <Sidebar
          raffles={raffles}
          handleRaffleSelect={handleRaffleSelect}
          raffleID={raffleID}
        />
      )}
      {!loading && <BallSorter raffleNumbers={raffleNumbers} />}
    </div>
  );
}

export default App;
