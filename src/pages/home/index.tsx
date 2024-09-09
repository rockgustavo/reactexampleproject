import { useState, useEffect } from "react";

interface CoinProps {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

interface DataProp {
  data: CoinProps[];
}

export function Home() {
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getData();
  }, [offset]);

  async function getData() {
    fetch(`https://api.coincap.io/v2/assets?limit=10&offset=${offset}`)
      .then((response) => response.json())
      .then((data: DataProp) => {
        const coinsData = data.data;
        const formatedResult = coinsData.map((item) => {
          const formated = {
            ...item,
            nome: item.name.toUpperCase(),
          };
          return formated;
        });

        console.log(formatedResult);
        const listCoins = [...coins, ...formatedResult];
        setCoins(listCoins);
      });
  }

  function handleGetMore() {
    if (offset === 0) {
      setOffset(10);
      return;
    }

    setOffset(offset + 10);
  }

  return (
    <div>
      <h1>Bem vindo à Home do Projeto</h1>
      <button onClick={handleGetMore}>Carregar mais</button>
    </div>
  );
}
