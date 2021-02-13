import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFakeStoreItems } from '../../redux/fakeStoreItems'


import { Container, Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'

const NavigationBar = () => {
    const {category, setCategory} = useState([])

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.fakeStoreItemsReducer)
    
    useEffect(() => {
        dispatch(fetchFakeStoreItems())
    }, [dispatch])

    const allCategories = [...new Set(data.map((item) => item.category))]
    

    return (
        <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Nikola Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            allCategories.map(item => <Nav.Link href="#link">{item.toUpperCase()}</Nav.Link> )                      
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