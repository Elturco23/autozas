import React from "react";
import {catalogos} from './lcatalogos';
import Accordion from 'react-bootstrap/Accordion';
import './catologo.css';
const items=catalogos;
export default class catalogo extends React.Component {
  render() {
    return (
    
      <Accordion defaultActiveKey="1" className="container-acordion-catalogo-taller1">
        <h2>Catalogo</h2>
        {items.map((item)=>(
  <Accordion.Item eventKey={item.eventKey}>
    <Accordion.Header>{item.title}</Accordion.Header>
    <Accordion.Body>
      {item.subtitle}<br/>
     <strong>Price: {item.price}</strong> 
    </Accordion.Body>
  </Accordion.Item>
        ))}
  </Accordion>
    );
    
  }
}
