import React from "react";
import { Card, Button } from "react-bootstrap";

const Note = (props) => {
    return(
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>{props.date}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="danger">Excluir</Button>
                </Card.Body>
            </Card>    
        </>
    )
}

export default Note;