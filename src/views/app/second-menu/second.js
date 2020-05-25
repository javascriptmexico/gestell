import React, { Component, Fragment } from "react";
import { Row, FormGroup, Label, Input, Table } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { Doughnut, Line, Bar } from 'react-chartjs-2';

export default class Second extends Component {
  data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
  dataLinea = {
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
  dataBarra = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Separator className="mb-3" />
            <h1 className="m-0 p-0"><i class="lni lni-angle-double-right"></i> REPORTE 2 - Validación de Etiquetas</h1>
            <Separator className="mb-3 mt-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="4" className="mb-6 d-flex align-items-center">
            <h4><i class="lni lni-angle-double-right"></i> Número de errores de contenido en etiquetas por reporte</h4>
          </Colxx>
          <Colxx xxs="4" className="mb-6 d-flex align-items-center">
            <h4><i class="lni lni-angle-double-right"></i> Tendencia de errores de contenido por etiqueta</h4>
          </Colxx>
          <Colxx xxs="4" className="mb-6 d-flex align-items-center">
            <h4><i class="lni lni-angle-double-right"></i> Errores en etiquetas por mal uso de catálogos</h4>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="exampleSelect">Seleccionar mes de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option value="" disabled selected>Seleccionar el mes de consulta</option>
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Marzo</option>
              </Input>
            </FormGroup>
            <Doughnut data={this.data} />
          </Colxx>
          <Colxx xxs="4" className="mb-4">
            <FormGroup>
              <Label for="exampleSelect">Seleccionar mes de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option value="" disabled selected>Seleccionar la etiqueta de consulta</option>
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Marzo</option>
              </Input>
            </FormGroup>
            <Line
              data={this.dataLinea}
              width={100}
              height={80}
            />
          </Colxx>
          <Colxx xxs="4" className="mb-4">
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
            <Doughnut data={this.data} />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6">
            <h4><i class="lni lni-angle-double-right"></i> Tipos de errores encontrados en cada etiqueta</h4>
          </Colxx>
          <Colxx xxs="6" className="mb-6">
            <h4><i class="lni lni-angle-double-right"></i> Campos erroneos por reporte</h4>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-4">
            <FormGroup>
              <Label for="exampleSelect">Seleccionar mes de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option value="" disabled selected>Seleccionar la etiqueta de consulta</option>
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Marzo</option>
              </Input>
            </FormGroup>
            <Bar data={this.dataBarra} />
          </Colxx>
          <Colxx xxs="6" className="mb-4">
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
      </Fragment>
    )
  }
}
