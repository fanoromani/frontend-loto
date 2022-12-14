import { useEffect, useState } from "react";
import { api } from "./lib/axios";
import { BallSorter } from "./components/BallSorter";
import { Sidebar } from "./components/Sidebar";
import "./index.css";
import { RaffleDataProps, RaffleProps, RaffleNumbersProps } from "./types";

function App() {
  const [raffles, setRaffles] = useState<RaffleProps[]>([
    { id: 0, nome: "mega-sena" },
  ]);
  const [raffleData, setRaffleData] = useState<RaffleDataProps[]>([]);
  const [raffleNumbers, setRaffleNumbers] = useState<RaffleNumbersProps>({
    data: "",
    id: "",
    loteria: 0,
    numeros: ["", ""],
  });
  const [raffleID, setRaffleID] = useState<string>("0");
  const [numbersID, setNumbersID] = useState<string>("2359");
  const [bgColor, setBgColor] = useState<string>("megasena");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setBgColor(
      raffles
        .find((e) => e.id.toLocaleString() === raffleID)
        ?.nome?.replace("-", "")
        ?.replace("á", "a")
        ?.replace(/ /g, "") || ""
    );
  }, [raffleID]);

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
          bgColor={bgColor}
          raffleNumbers={raffleNumbers}
        />
      )}
      {!loading && <BallSorter raffleNumbers={raffleNumbers} />}
    </div>
  );
}

export default App;
