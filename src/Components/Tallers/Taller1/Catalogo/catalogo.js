import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./catologo.css";
function Catalogo(props) {
  return (
    <Accordion
      defaultActiveKey="1"
      className="container-acordion-catalogo-taller1"
    >
      <h2>Catalogo</h2>
      {!props.catalogo.length ? (
        <h2>No existe ningun catalogo para este Taller</h2>
      ) : (
        props.catalogo.map((item) => (
          <Accordion.Item eventKey={item.eventKey}>
            <Accordion.Header>{item.Title}</Accordion.Header>
            <Accordion.Body>
              {item.Subtitle}
              <br />
              <strong>Price: {item.Price}</strong>
            </Accordion.Body>
          </Accordion.Item>
        ))
      )}
    </Accordion>
  );
}
export default Catalogo;
