import React, { Component } from 'react';
import { Card, CardGroup, Container  } from "react-bootstrap";
import DownloadButton from "../Components/DownloadButton";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Declaratie from '../assets/Documents/Declaratie.pdf';
import Raport from '../assets/Documents/Raport.pdf';
import DeclaratieImg from '../assets/Documents/DeclaratieImg.png';
import RaportImg from '../assets/Documents/RaportImg.png';
import Extras from '../assets/Documents/001.pdf'; 
import ExtrasImg from '../assets/Documents/Extras.png';

class Documents extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: '106px' }}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <h2 className='Montserrat-600 row align-items-center justify-content-center p-4'>Cuprins</h2>
      <Row className="justify-content-center">
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
            Declaratie cu privire la impozitul pe venit
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
            Raport al AO CB AVANGARDA
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
            EXTARS din Registrul de stat al persoanelor juridice
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={2}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <Card className='rounded shadow-lg' border='0'>
                    <Card.Body>
                        <Card.Img 
                          variant='top'
                          src={DeclaratieImg}
                        />
                      <Card.Title>Declaratie cu privire la impozitul pe venit</Card.Title>
                      <DownloadButton filePath={Declaratie} fileName="Declaratie cu privire la impozitul pe venit.pdf" />
                    </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="#link2">
              <Card className='rounded shadow-lg' border='0'>
                    <Card.Body>
                        <Card.Img 
                          variant='top'
                          src={RaportImg}
                        />
                      <Card.Title >Raport al AO CB AVANGARDA</Card.Title>
                      <DownloadButton filePath={Raport} fileName="Raport al AO CB AVANGARDA.pdf" />
                    </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="#link3">
              <Card className='rounded shadow-lg' bolder='0'>
                <Card.Body>
                    <Card.Img
                      variant='top'
                      src={ExtrasImg}
                    />
                  <Card.Title>EXTARS din Registrul de stat al persoanelor juridice</Card.Title>
                  <DownloadButton filePath={Extras} fileName="EXTARS din Registrul de stat al persoanelor juridice.pdf"/>
                </Card.Body> 
              </Card>
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </div>
    </>
    );
  }
}
export default Documents;