import React, { useState } from "react";
import { Container, Button, Modal, InputGroup, Form } from "react-bootstrap";

const Notes = () => {
    const [show, setShow] = useState(false);
    const [notelist, setNoteList] =useState([])

    const [note,setNote] =useState({
        date:'',
        title:'',
        description:''
    })

    function handleInputChange(event)
    {
        const {name, value}= event.target;
        setNote({
            ...note,
            [name]: value
        })
    }

    return(
        <>
            <Container className="p-5 bg-light my-4 rounded-3">
                <h1>Minhas Anotações</h1>
                <p>
                    Use essa janela para adicionar anotações e lembretes.
                </p>
                <Button variant="success" onClick={()=> setShow(true)}>Criar nova anotação</Button>
            </Container>

            <Modal show ={show}
            >
                <Modal.Header>
                    <Modal.Title> Nova anotação </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text>Data</InputGroup.Text>
                        <Form.Control
                            type ="date"
                            value={note.date}
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Titulo</InputGroup.Text>
                        <Form.Control
                            value={note.title}
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Descrição</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            value={note.description}
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShow(false)}>Cancelar</Button>
                    <Button variant="primary">Adicionar</Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}

export default Notes