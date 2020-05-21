import React, { Component, Fragment } from "react";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector
} from 'recharts';
import { Chart } from "react-google-charts";
import { Doughnut } from 'react-chartjs-2';
import { Row, Table } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const dataDOS = {
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

export default class Third extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Separator className="mb-3" />
            <h1 className="m-0">Errores en CURP / RFC</h1>
            <Separator className="mb-3 mt-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="3" className="mb-6">
            <h4>Número de errores de contenido en RFC/CURP por mes</h4>
          </Colxx>
          <Colxx xxs="6" className="mb-6">
            <h4>Personas físicas con errores en CURP</h4>
          </Colxx>
          <Colxx xxs="3" className="mb-6">
            <h4>Personas Físicas con CURP invalido y personas morales con RFC invalido</h4>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="3" className="mb-4">
            <BarChart
              width={300}
              height={300}
              data={data}
              margin={{
                top: 20, right: 30, left: 0, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </Colxx>
          <Colxx xxs="6" className="mb-4">
            <Table style={{ background: '#dedede' }}>
              <tbody>
                <tr>
                  <th colSpan="5">Personas Físicas con Errores en CURP</th>
                </tr>
                <tr>
                  <th scope="row">Nombre</th>
                  <td scope="row">Apellido Paterno</td>
                  <td scope="row">Apellido Materno</td>
                  <td scope="row">CURP Inválido</td>
                  <td scope="row">Registro Número</td>
                </tr>
                <tr>
                  <th scope="row">Juan</th>
                  <td scope="row">Perez</td>
                  <td scope="row">Gómez</td>
                  <td scope="row">PEG0834809JHFEWOF</td>
                  <td scope="row">MT10001</td>
                </tr>
                <tr>
                  <th scope="row">Juan</th>
                  <td scope="row">Perez</td>
                  <td scope="row">Gómez</td>
                  <td scope="row">PEG0834809JHFEWOF</td>
                  <td scope="row">MT10001</td>
                </tr>
                <tr>
                  <th scope="row">Juan</th>
                  <td scope="row">Perez</td>
                  <td scope="row">Gómez</td>
                  <td scope="row">PEG0834809JHFEWOF</td>
                  <td scope="row">MT10001</td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
          <Colxx xxs="3" className="mb-4">
            <Doughnut data={dataDOS} />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-4">
            <h4>Personas físicas con CURP inválidos/Personas morales con RFC Inválido</h4>
          </Colxx>
          <Colxx xxs="6" className="mb-4">
            <h4>Tabla con errores relacionados por registro</h4>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-4">
            <Table style={{ background: '#dedede' }}>
              <tbody>
                <tr>
                  <th colSpan="5">Personas Físicas con Errores en RFC</th>
                </tr>
                <tr>
                  <th scope="row">Nombre</th>
                  <td scope="row">Apellido Paterno</td>
                  <td scope="row">Apellido Materno</td>
                  <td scope="row">CURP Inválido</td>
                  <td scope="row">Registro Número</td>
                </tr>
                <tr>
                  <th scope="row">Juan</th>
                  <td scope="row">Perez</td>
                  <td scope="row">Gómez</td>
                  <td scope="row">PEG0834809JHFEWOF</td>
                  <td scope="row">MT10001</td>
                </tr>
                <tr>
                  <th scope="row">Juan</th>
                  <td scope="row">Perez</td>
                  <td scope="row">Gómez</td>
                  <td scope="row">PEG0834809JHFEWOF</td>
                  <td scope="row">MT10001</td>
                </tr>
                <tr>
                  <th scope="row">Juan</th>
                  <td scope="row">Perez</td>
                  <td scope="row">Gómez</td>
                  <td scope="row">PEG0834809JHFEWOF</td>
                  <td scope="row">MT10001</td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
          <Colxx xxs="6" className="mb-4">
            <Table style={{ background: '#dedede' }}>
              <tbody>
                <tr>
                  <th colSpan="5">Archivo XXX</th>
                </tr>
                <tr>
                  <th scope="row">Número de registro</th>
                  <td scope="row">Error en RFC</td>
                  <td scope="row">RFC</td>
                  <td scope="row">Error en CURP</td>
                  <td scope="row">CURP</td>
                  <td scope="row">Error en Fecha de Nacimiento</td>
                  <td scope="row">Fecha de Nacimiento</td>
                </tr>
                <tr>
                  <th scope="row">MT00001</th>
                  <td scope="row">SI</td>
                  <td scope="row">AST1202NDUW73W</td>
                  <td scope="row">SI</td>
                  <td scope="row">No puede existir CURP</td>
                  <td scope="row">N/A</td>
                  <td scope="row">N/A</td>
                </tr>
                <tr>
                  <th scope="row">MT00001</th>
                  <td scope="row">SI</td>
                  <td scope="row">AST1202NDUW73W</td>
                  <td scope="row">SI</td>
                  <td scope="row">No puede existir CURP</td>
                  <td scope="row">N/A</td>
                  <td scope="row">N/A</td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
        </Row>
      </Fragment>
    )
  }
}
