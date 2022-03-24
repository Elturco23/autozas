import React from 'react';
import {preguntas} from './preguntas';
import  Accordion  from 'react-bootstrap/Accordion';
import './faqs.css';
const items = preguntas;

 export default class faqs extends React.Component{
     render(){
    return (
        <Accordion defaultActiveKey="1" className="container-acordion-preguntas">
        <h2 style={{
          color:'#2b2d42',
          fontWeight:'bold'
        }}>Preguntas Frecuentes</h2>
        {items.map((item)=>(
  <Accordion.Item eventKey={item.eventKey}>
    <Accordion.Header>{item.title}</Accordion.Header>
    <Accordion.Body style={{
      textAlign:'justify'
    }}>
      {item.content}
     
    </Accordion.Body>
  </Accordion.Item>
        ))}
  </Accordion>
    );
   
     }
}

