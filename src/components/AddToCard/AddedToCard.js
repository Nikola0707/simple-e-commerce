import React from 'react'
import './AddedToCardStyle.css'
import { Button, Col, Modal, Row } from 'react-bootstrap'

const AddedtoCard = () => {
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title><ion-icon name="checkmark-circle"></ion-icon>Added to your cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={5} className='text-center'>
                        <img className='added-to-card-img' src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' alt="test"/>
                    </Col>
                    <Col md={7}>
                        <p className='quantity'>Quantity: 1</p>
                        <p className='item-price'>Price: $5.99</p>
                        <p className='total-price'>Total: $5.99</p>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">CONTINUE SHOPPING</Button>
                <Button variant="primary">CHECKOUT</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default AddedtoCard