import React from "react";
import { Card, Button } from "react-bootstrap";

export function BookCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src={props.book.img} /> 
            <Card.Body>
                <Card.Title>{props.book.title}</Card.Title>
                <Card.Text>Author: {props.book.author}</Card.Text>
                <Button variant="warning">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}