import React from 'react'
import NavigationBar from './components/Navbar/NavigationBar'
import './App.css';
import { Container } from 'react-bootstrap';
import CardComponent from './components/Cards/CardComponent';

function App() {
  return (
    <Container>
      <NavigationBar />
      <CardComponent />
    </Container>
  );
}

export default App;
