import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Spinner } from 'react-bootstrap'
import './CardComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFakeStoreItems } from '../../redux/fakeStoreItems'

const CardComponent = () => {
    const [readMore, setReadMore] = useState(false)

    const dispatch = useDispatch()
    const { pending, error, data } = useSelector(state => state.fakeStoreItemsReducer)

    useEffect(() => {
        dispatch(fetchFakeStoreItems())
    }, [dispatch])
    

    if (pending) return <Spinner animation='border' />
    if (error) return <div>{error}</div>

    return (
        <Container className='mt-5'>
            <h3>All Products</h3>
            <Row>
                {
                    data.map((item) =>                        
                        <Card key={item.id} style={{ width: '25%'}} >
                            <Card.Img variant="top" src={item.image}  style={{ width: '100%', maxHeight: '250px' }}/>
                            <Card.Body>
                                <Card.Title>{item.category.toUpperCase()} <span className='price'>${item.price}</span></Card.Title>
                                <Card.Text>
                                    {
                                       readMore?item.description:`${item.description.substring(0, 100)}...`
                                    }
                                    <button className='read-btn' onClick={() => {                                       
                                        setReadMore(!readMore)
                                    }}>
                                        {                                            
                                            readMore?'SHOW LESS':'READ MORE'
                                        }
                                    </button>
                                </Card.Text>
                                <button className='btn-add-to-card'>ADD TO CARD</button>
                            </Card.Body>
                        </Card>
                    )
                }
            </Row>
        </Container>
    )
}

export default CardComponent