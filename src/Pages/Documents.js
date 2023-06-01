import React, { Component } from 'react';
import { Card, CardGroup, Container  } from "react-bootstrap";
import DownloadButton from "../Components/DownloadButton";

import Declaratie from '../assets/Documents/Declaratie.pdf';
import Raport from '../assets/Documents/Raport.pdf';
import DeclaratieImg from '../assets/Documents/DeclaratieImg.png'
import RaportImg from '../assets/Documents/RaportImg.png'


class Documents extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: '56px' }}>
          <Container>
            <CardGroup className='mx-auto'>
              <Card  className='m-5 rounded shadow-lg' border='0'>
                  <Card.Body>
                    <Card.Img 
                      variant='top'
                      src={DeclaratieImg}
                    />
                    <Card.Title>Declaratie cu privire la impozitul pe venit</Card.Title>
                    <DownloadButton filePath={Declaratie} fileName="Declaratie cu privire la impozitul pe venit.pdf" />
                  </Card.Body>
              </Card>
              <Card className='m-5  rounded shadow-lg' border='0'>
                  <Card.Body>
                    <Card.Img 
                      variant='top'
                      src={RaportImg}
                    />
                    <Card.Title >Raport al AO CB AVANGARDA</Card.Title>
                    <DownloadButton filePath={Raport} fileName="Raport al AO CB AVANGARDA.pdf" />
                  </Card.Body>
              </Card>
            </CardGroup>
          </Container>
      </div>
    </>
    );
  }
}
export default Documents;