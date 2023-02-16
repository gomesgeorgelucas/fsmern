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

interface Props {
  child?: ReactElement;
}

const ReadAll: FC<Props> = (props) => {
  return <div>Read All</div>;
};

export default ReadAll;
