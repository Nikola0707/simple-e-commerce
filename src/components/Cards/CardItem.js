import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { cardClickedAndId } from '../../redux/cardItem.js'

const CardItem = ({ item }) => {
    const [clicked, setClicked] = useState(false)
    const [itemId, setItemId] = useState('')
    const [readMore, setReadMore] = useState(false)

    const dispatch = useDispatch()

    const dispatchAction = () => {
        setClicked(!clicked)
        setItemId(item.id)
        dispatch(cardClickedAndId(clicked, itemId))
    }

    return (
        <Card key={item.id} style={{ width: '25%' }} >
            <Card.Img variant="top" src={item.image} style={{ width: '80%', maxHeight: '180px', margin: '0 auto' }} />
            <Card.Body>
                <Card.Title><p>{item.title.toUpperCase()} <span className='price'>${item.price}</span></p></Card.Title>
                <Card.Text>
                    {
                        readMore ? item.description : `${item.description.substring(0, 100)}...`
                    }
                    <button className='read-btn' onClick={() => {
                        setReadMore(!readMore)
                    }}>
                        {
                            readMore ? 'SHOW LESS' : 'READ MORE'
                        }
                    </button>
                </Card.Text>
                <button className='btn-add-to-card' onClick={dispatchAction}>ADD TO CARD</button>
            </Card.Body>
        </Card>
    )
}

export default CardItem