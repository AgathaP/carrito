import React from 'react';
import { Button, Container, Modal, ModalBody, ModalHeader, ModalFooter, CardImg } from 'reactstrap';
import './FichaProducto.css';

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        console.log(this.props);
    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                    <CardImg src={this.props.props.imagen}/>
                    <p>{this.props.props.descripcion}</p> <br></br>
                    <b>{this.props.props.precio}</b>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.toggle}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;