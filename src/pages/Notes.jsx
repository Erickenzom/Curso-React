import React, { useState } from "react";
import { Container, Button, Modal, InputGroup, Form } from "react-bootstrap";
import Note from "../components/Note";

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

    function SaveNote() {
        if (!note.date || !note.title || !note.description) {
            alert("Por favor, Preencha todos os campos");
            return;
        }

        setNoteList([...notelist, note])
        setShow(false);

        setNote({
            date:'',
            title:'',
            description:''
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

            <Container>
                {notelist.map(item => <Note title={item.title} date={item.date} description={item.description}/>)}
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
                            name="date"
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Titulo</InputGroup.Text>
                        <Form.Control
                            value={note.title}
                            name="title"
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroup.Text>Descrição</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            value={note.description}
                            name="description"
                            onChange={handleInputChange}
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShow(false)}>Cancelar</Button>
                    <Button variant="primary" onClick={SaveNote}>Adicionar</Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}

export default Notes