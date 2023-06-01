import React from 'react';
import { Container, Table } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container className='mx-auto m-4 p-4'>
        <h2 className='Montserrat-600'>GRAFICUL ANTRENAMENTELOR</h2>
    <Table responsive='sm' className='Montserrat-300'>
      <tbody>
        <tr>
          <th>LUNI</th>
          <td>15:00</td>
          <td>17:15</td>
        </tr>
        <tr>
          <th>MARTI</th>
          <td>16:00</td>
          <td></td>
        </tr>
        <tr>
          <th>MIERCURI</th>
          <td>15:00</td>
          <td>17:15</td>
        </tr>
        <tr>
          <th>JOI</th>
          <td>16:00</td>
          <td></td>
        </tr>
        <tr>
          <th>VINERI</th>
          <td>15:00</td>
          <td>17:15</td>
        </tr>
        <tr>
          <th>SIMBATA</th>
          <td>10:00</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
};

export default MyComponent;
