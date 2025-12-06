import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";.`

const MemeCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem", margin: "24px" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Button onClick={(e)=>navigate(`/edit/${props.image}`)} variant="primary">Edit</Button> */}
        passing query parameter na ki path parameter becs image load hone pe
        path change ho raha h
        <Button 
          onClick={(e) => navigate(`/edit?url=${props.image}`)}
          variant="primary"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};
export default MemeCard;
