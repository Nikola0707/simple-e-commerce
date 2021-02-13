import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

import { useDispatch, useSelector } from 'react-redux'
import { fetchFakeStoreItems, filterBy } from '../../redux/fakeStoreItems'


import { Container, Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'

const NavigationBar = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.fakeStoreItemsReducer)
    
    useEffect(() => {
        dispatch(fetchFakeStoreItems())
    }, [dispatch])

    const allCategories = ['ALL', ...new Set(data.map((item) => item.category))]    

    return (
        <Container>
            <Navbar bg="light" variant="light" expand="lg" className='py-0 px-5'>
                <Navbar.Brand href="#home"><img src={logo} alt='logo' style={{width:'80px'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" onClick={(e) => {
                        dispatch(filterBy(e.target.firstChild.data))
                        }}>
                        {
                            allCategories.map((item, index) =><Nav.Link key={index} href="#link">{item.toUpperCase()}</Nav.Link> )                      

                       }
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
export default NavigationBar