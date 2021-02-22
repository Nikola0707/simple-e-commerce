import React, { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import './CardComponent.css'

import AddedToCard from '../AddToCard/AddedToCard'

import CardItem from './CardItem'

import { useDispatch, useSelector } from 'react-redux'
import { fetchFakeStoreItems } from '../../redux/fakeStoreItems'

const CardComponent = () => {

    const dispatch = useDispatch()
    const { pending, error, data, filterBy } = useSelector(state => state.fakeStoreItemsReducer)
    const { addToCard } = useSelector(state => state.cardItemReducer)


    useEffect(() => {
        dispatch(fetchFakeStoreItems())
    }, [dispatch])


    if (pending) return <Spinner animation='border' />
    if (error) return <div>{error}</div>

    if (filterBy === '' || filterBy === 'ALL') {
        return (
            <Container className='mt-5'>
                <h3>All Products </h3>
                {
                    <Row>
                        {addToCard === true ? <Container><AddedToCard /></Container> :
                            data.map(
                                (item) => <CardItem key={item.id} item={item}  />
                            )
                        }
                    </Row>
                }
            </Container>
        )
    } else if (filterBy === 'MEN CLOTHING') {
        return (
            <Container className='mt-5'>
                <h3>MEN CLOTHING</h3>
                {
                    <Row>
                        {addToCard === true ? <Container><AddedToCard /></Container> :
                            data.map(
                                (item) => item.category === 'men clothing' ?
                                    <CardItem key={item.id} item={item}  />
                                    : null
                            )}
                    </Row>
                }
            </Container>
        )
    } else if (filterBy === 'JEWELERY') {
        return (
            <Container className='mt-5'>
                <h3>JEWELLERY</h3>
                {
                    <Row>
                        {addToCard === true ? <Container><AddedToCard /></Container> :
                            data.map(
                                (item) => item.category === 'jewelery' ?
                                    <CardItem key={item.id} item={item}  />
                                    : null
                            )}
                    </Row>
                }
            </Container>
        )
    } else if (filterBy === 'ELECTRONICS') {
        return (
            <Container className='mt-5'>
                <h3>ELECTRONICS</h3>
                {
                    <Row>
                        {addToCard === true ? <Container><AddedToCard /></Container> :
                            data.map(
                                (item) => item.category === 'electronics' ?
                                    <CardItem key={item.id} item={item}  />
                                    : null
                            )}
                    </Row>
                }
            </Container>
        )
    } else if (filterBy === 'WOMEN CLOTHING') {
        return (
            <Container className='mt-5'>
                <h3>WOMEN CLOTHING</h3>
                {
                    <Row>
                        {addToCard === true ? <Container><AddedToCard /></Container> :
                            data.map(
                                (item) => item.category === 'women clothing' ?
                                    <CardItem key={item.id} item={item}  />
                                    : null
                            )}
                    </Row>
                }
            </Container>
        )
    }
}

export default CardComponent