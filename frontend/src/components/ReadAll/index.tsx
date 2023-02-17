/**
 * Exercício!
 * Dentro do component ReadAll, crie um componente de Card.
 * Dentro do Card, exiba uma imagem de qualquer personagem
 * Além disso, também exiba o nome da personagem.
 *
 * OBS: Caso você tenha escolhido algo diferente no backend, pode mante o tema original.
 * Não precisa ser integrado com o backend! Apenas a exibição de dados no frontend.
 *
 *
 * Exercício bônus:
 * Pegue o div com a classe "Card" e extraia em um componente JSX, seguindo os mesmos
 * passos que fizemos para a criação do componente de ReadAll
 */
import { ReactElement, FC } from "react";
import Card from "../Cards/Card";
import { CardData } from "../Cards/typings/card";

import "./style.css";

interface Props {
  child?: ReactElement;
}

const data = [
  {
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
  },
  {
    img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
  },
] as CardData[];

const ReadAll: FC<Props> = (_) => {
  if (!data.length) return null;

  return (
    <div className="card-container">
      {data.map((card, index) => {
        return (
          <Card
            key={`$card-${card?._id ?? index}-key`}
            img={card?.img}
            name={card?.name}
          />
        );
      })}
    </div>
  );
};

export default ReadAll;
