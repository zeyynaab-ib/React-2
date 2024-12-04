
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: '18rem',
    marginBottom: '20px'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Équipe: {team}<br />
          Nationalité: {nationality}<br />
          Numéro de maillot: {jerseyNumber}<br />
          Âge: {age}
        </Card.Text>
        <Button variant="primary">Voir plus</Button>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Nom inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: 0,
  age: "Âge inconnu",
  imageUrl: "https://example.com/default.jpg"
};

export default Player;
