import React from 'react';
import { Container, Table } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container className='mx-auto m-4 p-4'>
        <h2 className='Montserrat-600 row align-items-center justify-content-center p-4'>График тренировок</h2>
    <Table responsive='sm' className='Montserrat-300'>
      <tbody>
        <tr>
          <th>Понедельник</th>
          <td>15:00</td>
          <td>17:15</td>
        </tr>
        <tr>
          <th>Вторник</th>
          <td>16:00</td>
          <td></td>
        </tr>
        <tr>
          <th>Среда</th>
          <td>15:00</td>
          <td>17:15</td>
        </tr>
        <tr>
          <th>Четверг</th>
          <td>16:00</td>
          <td></td>
        </tr>
        <tr>
          <th>Пятница</th>
          <td>15:00</td>
          <td>17:15</td>
        </tr>
        <tr>
          <th>Суббота</th>
          <td>10:00</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
};

export default MyComponent;
