import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ title, price, description, image }) => {
  const [heart, setHeart] = useState(false);

  const handleClick = () => setHeart(!heart);

  return (
    <Card className="rounded-2 m-auto card" role="button">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price}</Card.Title>
        <MdFavorite size={30} onClick={handleClick} className={heart? "text-danger": ""} />
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />

      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
