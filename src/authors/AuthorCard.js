import React from "react";
import { Card, Button } from "react-bootstrap";


export function AuthorCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src={props.author.img} /> 
            <Card.Body>
                <Card.Title>{props.author.name}</Card.Title>
                <Card.Text>Country: {props.author.country}</Card.Text>
                <Button variant="warning">View Author</Button>
            </Card.Body>
        </Card>
    );
}