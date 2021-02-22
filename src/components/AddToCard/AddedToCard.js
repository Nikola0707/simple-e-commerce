import React from 'react'
import './AddedToCardStyle.css'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { cardClickedAndId } from '../../redux/cardItem.js'


const AddedtoCard = () => {
    const {image, price} = useSelector(state => state.cardItemReducer)
    const dispatch = useDispatch()
    
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title><ion-icon name="checkmark-circle"></ion-icon>Added to your cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={5} className='text-center'>
                        <img className='added-to-card-img' src={image} alt="test"/>
                    </Col>
                    <Col md={7}>
                        <p className='quantity'>Quantity: 1</p>
                        <p className='item-price'>Price: ${price}</p>
                        <p className='total-price'>Total: $5.99</p>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{
                    dispatch(cardClickedAndId(false, '', '', ''))
                }}>CONTINUE SHOPPING</Button>
                <Button variant="primary">CHECKOUT</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default AddedtoCard