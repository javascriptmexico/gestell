import React, { Component, Fragment } from "react";
import { Row, FormGroup, Label, Input, Table } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
const dataPie = {
  labels: [
    'Verde',
    'Más Verde',
    'Amarillo'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#8fb51c',
      '#297e36',
      '#dda113'
    ],
    hoverBackgroundColor: [
      '#8fb51c',
      '#297e36',
      '#dda113'
    ]
  }]
};
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Mis datos de la Fundación',
      backgroundColor: 'rgba(24,41,46,0.5)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const dataLinea = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Mis datos de la Fundación',
      backgroundColor: 'rgba(255,255,255,0.4)',
      borderColor: 'rgba(3,3,3,1)',
      borderWidth: 1,
      lineTension: 0,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 59, 80, 81, 56, 55, 80]
    },
    {
      label: 'Mis datos de la empresa',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      lineTension: 0,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 39, 70, 88, 56, 75, 90]
    },
    {
      label: 'Mis datos de personales',
      borderColor: 'rgba(0,255,0,1)',
      borderWidth: 1,
      lineTension: 0,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 19, 30, 48, 56, 75, 50]
    }
  ]
};
const dataPieDos = {
  labels: [
    'Approve',
    'Disapprove',
    'Undecided'
  ],
  datasets: [{
    data: [200, 150, 10],
    backgroundColor: [
      '#18292e',
      '#85a261',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#18292e',
      '#85a261',
      '#FFCE56'
    ]
  }]
};
export default class Start extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Separator className="mb-3" />
            <h1 className="m-0 p-0">REPORTE 1 - Validación de Estructura del Reporte</h1>
            <Separator className="mb-3 mt-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6">
            <h4><i class="lni lni-angle-double-right"></i> Número de Errores de Estructura por etiqueta en reporte</h4>
          </Colxx>
          <Colxx xxs="6" className="mb-6">
            <h4><i class="lni lni-angle-double-right"></i> Tendencia de errores de estructura por etiqueta</h4>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="5" className="mb-6">
            <FormGroup>
              <Label for="exampleSelect">Seleccionar mes de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Marzo</option>
              </Input>
            </FormGroup>
            <Pie
              data={dataPie}
              width={60}
              height={40}
              options={{ maintainAspectRatio: true }}
            />
          </Colxx>
          <Colxx xxs="2" className="mb-6"></Colxx>
          <Colxx xxs="5" className="mb-6">
            <FormGroup>
              <Label for="exampleSelect">Seleccionar año de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </Input>
            </FormGroup>
            <Line
              data={dataLinea}
              width={100}
              height={65}
            />
          </Colxx>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Colxx xxs="12" className="mb-12">
            <Separator className="mb-3" />
            <h4><i class="lni lni-angle-double-right"></i> Errores de estructura por etiqueta en reporte</h4>
            <Separator className="mb-3 mt-3" />
            <FormGroup>
              <Label for="exampleSelect">Seleccionar mes de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Marzo</option>
              </Input>
            </FormGroup>
            <Table style={{ background: '#dedede' }}>
              {/* 
              <thead>
                <tr>
                  <th colSpan="6"> <h1 style={{ textAlign: 'center' }}>Archivo XXX</h1></th>
                </tr>
              </thead>
              */}
              <tbody>
                <tr>
                  <th scope="row">Número de Registro</th>
                  <td scope="row">Número de errores</td>
                  <td scope="row">Etiquetas erróneas</td>
                  <td scope="row">Mensaje del Error</td>
                </tr>
                <tr>
                  <th rowSpan="6">MT 0001</th>
                </tr>
                <tr>
                  <th rowSpan="6">4</th>
                </tr>
                <tr>
                  <th scope="row">blc_aba</th>
                  <td>Campo no es alfanúmerico</td>
                </tr>
                <tr>
                  <th scope="row">Monto</th>
                  <td>El campo excede lo dispuesto en el DOF</td>
                </tr>
                <tr>
                  <th scope="row">Folio</th>
                  <td>El folio contiene ceros a la izquierda</td>
                </tr>
                <tr>
                  <th scope="row">Mensaje</th>
                  <td>El campo no contiene alfanúmericos</td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
        </Row>
      </Fragment >
    )
  }
}
