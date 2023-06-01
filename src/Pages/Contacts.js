import React, { Component } from 'react'
import { Container, CardGroup, Card  } from "react-bootstrap";
import img1 from '../assets/borea.jpg';
import img2 from '../assets/andrei.jpg';
import img3 from '../assets/vanea.jpg';



export default class Contacts extends Component {
  render() {
    return (
      <>
      <div style={{ paddingTop: '56px' }}>
        <Container>
          <></>
          <CardGroup className='mx-auto'>
            <Card className='m-4  rounded shadow-lg'>
              <Card.Img 
                variant='top'
                src={img1}
              />
              <Card.Body>
                <Card.Title>Борис Терзи</Card.Title>
                <Card.Text>
                    Мобильный номер: -
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='m-4 rounded shadow-lg'>
              <Card.Img 
                variant="top"
                src={img2}
              />
              <Card.Body>
                <Card.Title>Цынцырук Андрей</Card.Title>
                <Card.Text>
                    Мобильный номер: 079707911
                </Card.Text>
              </Card.Body>
             
            </Card>
            <Card className='m-4 rounded shadow-lg'>
              <Card.Img 
                variant="top"
                src={img3}
              />
              <Card.Body>
                <Card.Title>Запороженко Иван</Card.Title>
                <Card.Text>
                    Мобильный номер: 079760357
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        </div>
        </>
    )
  }
}
