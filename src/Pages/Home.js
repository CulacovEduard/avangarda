import React, { Component } from 'react';
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card  } from "react-bootstrap";
import '../Components/NavBarStyle.css';

export default class Home extends Component {
  render() {
    return (
      <>
      <div style={{ paddingTop: '56px' }}>
        <CarouselBox />
          <Container>
            <CardGroup className='mx-auto'>
                  <Card border="0" className='m-4' >
                    <Card.Title>Быстрее!</Card.Title>
                    <Card.Text>
                      Добро пожаловать в бойцовский клуб "Avangarda" – эпицентр страсти, силы и высоких достижений в мире бокса. Наш клуб славится своим сильным духом соперничества, профессиональным тренерским составом и первоклассным оборудованием, созданным, чтобы превратить обычных людей в настоящих чемпионов.
                    </Card.Text>
                  </Card>
                  <Card border="0" className='m-4'>
                  <Card.Title>Выше!</Card.Title>
                    <Card.Text>
                    С первых мгновений, когда вы переступите порог нашего клуба, вы окунетесь в атмосферу страсти и мужества. Мы предлагаем безупречное сочетание интенсивной тренировки, технического мастерства и непревзойденного командного духа. Наши тренеры – опытные и высококвалифицированные профессионалы, которые внимательно относятся к каждому члену нашего клуба и помогут вам достичь лучших результатов.
                    </Card.Text>
                  </Card>
                  <Card border="0" className='m-4'>
                  <Card.Title>Сильнее!</Card.Title>
                    <Card.Text>
                    Клуб "Avangarda" – это не просто место, где можно тренироваться, это настоящее сообщество единомышленников, где люди, разделяющие страсть к боксу, сходятся вместе, чтобы поддерживать и вдохновлять друг друга
                    </Card.Text>
                  </Card>
              </CardGroup>
          </Container>
        </div>
      </>
    )
  }
}
