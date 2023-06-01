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
          <CardGroup className='mx-auto m-4'>
            <Card className='m-5 rounded shadow-lg' border='0'>
              <Card.Img 
                variant='top'
                src={img1}
              />
              <Card.Body>
                <Card.Text className='Montserrat-600'>Борис Терзи</Card.Text>
                <Card.Text className='Montserrat-300'>
                    Мобильный номер: -
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='m-5 rounded shadow-lg' border='0'>
              <Card.Img 
                variant="top"
                src={img2}
              />
              <Card.Body>
                <Card.Text className='Montserrat-600'>Цынцырук Андрей</Card.Text>
                <Card.Text className='Montserrat-300'>
                    Мобильный номер: 079707911
                </Card.Text>
              </Card.Body>
             
            </Card>
            <Card className='m-5 rounded shadow-lg' border='0'>
              <Card.Img 
                variant="top"
                src={img3}
              />
              <Card.Body>
                <Card.Text className='Montserrat-600'>Запороженко Иван</Card.Text>
                <Card.Text className='Montserrat-300'>
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
