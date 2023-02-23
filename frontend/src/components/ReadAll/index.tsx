import { ReactElement, useState, useEffect } from "react";
import Card from "../Card/Card";
import { CardData } from "../Card/typings/card";

import "./style.css";

const itemsMock = [
  {
    _id: "63ee1e0b18f2b9a93da8435a",
    nome: "Rick Sanchez",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"],
  },
  {
    _id: "63ef87c74522de2944ab1fa8",
    nome: "Morty Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    _id: "63ef87cc4522de2944ab1fa9",
    nome: "Summer Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    _id: "63ef87d44522de2944ab1faa",
    nome: "Beth Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    _id: "63ef87e24522de2944ab1fab",
    nome: "Jerry Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },
] as CardData[];

const URL = "http://192.168.1.3:3001/list";

const ReadAll = () => {
  const [items, setItems] = useState(itemsMock);

  const realizarRequisicao = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    console.log(Object.values(data));

    setItems(Object.values(data));
  };

  useEffect(() => {
    realizarRequisicao();
  }, []);

  if (!items.length) return null;

  return (
    <div className="card-container">
      {items.map((card, index) => {
        return (
          <Card
            key={`$card-${card?._id ?? index}-key`}
            img={card?.imagemUrl}
            name={card?.nome}
            tags={card?.tags}
          />
        );
      })}
    </div>
  );
};

export default ReadAll;
