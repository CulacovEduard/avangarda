import React, { Component } from 'react';
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card  } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
      <div style={{ paddingTop: '56px' }}>
        <CarouselBox />
          <Container>
            <CardGroup className='mx-auto m-4 '>
                  <Card border="0" className='m-3 p-4' >
                    <Card.Text className='Montserrat-600'>Быстрее!</Card.Text>
                    <Card.Text className='Montserrat-300'>
                      Добро пожаловать в бойцовский клуб "Avangarda" – эпицентр страсти, силы и высоких достижений в мире бокса. Наш клуб славится своим сильным духом соперничества, профессиональным тренерским составом и первоклассным оборудованием, созданным, чтобы превратить обычных людей в настоящих чемпионов.
                    </Card.Text>
                  </Card>
                  <Card border="0" className='m-3 p-4'>
                  <Card.Text className='Montserrat-600'>Выше!</Card.Text>
                    <Card.Text className='Montserrat-300'>
                    С первых мгновений, когда вы переступите порог нашего клуба, вы окунетесь в атмосферу страсти и мужества. Мы предлагаем безупречное сочетание интенсивной тренировки, технического мастерства и непревзойденного командного духа. Наши тренеры – опытные и высококвалифицированные профессионалы, которые внимательно относятся к каждому члену нашего клуба и помогут вам достичь лучших результатов.
                    </Card.Text>
                  </Card>
                  <Card border="0" className='m-3 p-4'>
                  <Card.Text className='Montserrat-600'>Сильнее!</Card.Text>
                    <Card.Text className='Montserrat-300'>
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
