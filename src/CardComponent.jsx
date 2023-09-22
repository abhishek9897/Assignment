import React from 'react'
import { Card } from "react-bootstrap"
import "./cardComponent.css"
function CardComponent({ width, image, Heading, Description, price }) {
  return (
    <div><Card style={{ width: width, border: "0", }}>
      <Card.Img variant="top" src={image} style={{ maxHeight: "250px" }} />
      <Card.Body>
        <Card.Title className="Heading">{Heading}</Card.Title>
        <Card.Text className="Description">{Description}</Card.Text>
        <p className='Price'>{price}</p>
      </Card.Body>
    </Card></div>
  )
}

export default CardComponent