import React, { Component, Fragment } from "react";
import { Row, FormGroup, Label, Input, Table } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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

export default class Seconduno extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Separator className="mb-3" />
            <h1 className="m-0 p-0">Reporte 4 - Etiquetas relacionadas y reglas especiales</h1>
            <Separator className="mb-3 mt-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6">
            <h4><i class="lni lni-angle-double-right"></i> Etiquetas relacionadas a operaciones vacias cuando la etiqueta está presente</h4>
            <hr />
            <Table style={{
              background: '#dedede',
              display: 'block',
              overflow: 'auto',
              height: '290px'
            }}>
              <tbody>
                <tr>
                  <th scope="row">Número de Registro</th>
                  <td scope="row">Campos vacios/inválidos que son obligatorios</td>
                  <td scope="row">Fecha del reporte</td>
                  <td scope="row">Nombre del Archivo</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>No existe el nombre del participante y existe la etiqueta vostro en el registro</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>No existe el nombre del participante y existe la etiqueta vostro en el registro</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>El nombre del participante excede lo dispuesto en el DOF</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>El nombre del participante excede lo dispuesto en el DOF</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
          <Colxx xxs="6" className="mb-6">
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
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
              <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6">
            <hr />
            <h4><i class="lni lni-angle-double-right"></i> Registro con Operación modificatoria pero sin información en la etiqueta 3.1.2.1</h4>
            <hr />
            <Table style={{
              background: '#dedede',
              display: 'block',
              overflow: 'auto',
              height: '290px'
            }}>
              <tbody>
                <tr>
                  <th scope="row">Número de Registro</th>
                  <td scope="row">Campos vacios/inválidos que son obligatorios</td>
                  <td scope="row">Fecha del reporte</td>
                  <td scope="row">Nombre del Archivo</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>No existe el nombre del participante y existe la etiqueta vostro en el registro</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>No existe el nombre del participante y existe la etiqueta vostro en el registro</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>El nombre del participante excede lo dispuesto en el DOF</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>El nombre del participante excede lo dispuesto en el DOF</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
          <Colxx xxs="6" className="mb-6">
            <hr />
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
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
              <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6">
            <hr />
            <h4><i class="lni lni-angle-double-right"></i> Registros con etiqueta vostro pero vacios o con información invalida en la etiqueta 3.1.5.3.1</h4>
            <hr />
            <Table style={{
              background: '#dedede',
              display: 'block',
              overflow: 'auto',
              height: '290px'
            }}>
              <tbody>
                <tr>
                  <th scope="row">Número de Registro</th>
                  <td scope="row">Campos vacios/inválidos que son obligatorios</td>
                  <td scope="row">Fecha del reporte</td>
                  <td scope="row">Nombre del Archivo</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>No existe el nombre del participante y existe la etiqueta vostro en el registro</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>No existe el nombre del participante y existe la etiqueta vostro en el registro</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>El nombre del participante excede lo dispuesto en el DOF</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
                <tr>
                  <th scope="row">34567</th>
                  <td>El nombre del participante excede lo dispuesto en el DOF</td>
                  <td>9022020</td>
                  <td>TIF_FEB_2020</td>
                </tr>
              </tbody>
            </Table>
          </Colxx>
          <Colxx xxs="6" className="mb-6">
            <hr />
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
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
              <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
          </Colxx>
        </Row>
      </Fragment>
    )
  }
}
