import React from 'react'
import { Card } from 'react-bootstrap'

const CardItem = ({ item, readMore, setReadMore }) => {
    return (
        <Card key={item.id} style={{ width: '25%' }} >
            <Card.Img variant="top" src={item.image} style={{ width: '100%', maxHeight: '250px' }} />
            <Card.Body>
                <Card.Title><p>{item.title.toUpperCase()}</p> <span className='price'>${item.price}</span></Card.Title>
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
                <button className='btn-add-to-card'>ADD TO CARD</button>
            </Card.Body>
        </Card>
    )
}

export default CardItem