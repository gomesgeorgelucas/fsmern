import "./style.css";
import { ReactElement, FC } from "react";

interface CardProps {
  className?: string;
  img: string;
  name: string;
  child?: ReactElement;
  tags?: string[];
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className={props?.className ?? "card"}>
      <h2 className="card-title">{props?.name}</h2>
      {props?.tags && (
        <div className="card-tags-wrapper">
          {props?.tags.map((item, index) => {
            return (
              <div key={`tag-${index}`} className="card-tag">
                {item}
              </div>
            );
          })}
        </div>
      )}
      <figure className="card-figure">
        <img
          className="card-image"
          src={props?.img}
          alt={`Uma foto de ${props?.name}.`}
        />
        <figcaption className="card-caption">
          Uma foto de {props?.name}
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
