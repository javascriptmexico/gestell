import React, { Component, Fragment } from "react";
import { Row, FormGroup, Label, Input } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import {
  PieChart, Pie,
} from 'recharts';
import './Secondmenu.css';
import Tree from 'react-d3-tree';
import './Secondmenu.css';

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    nodeSvgShape: {
      shapeProps: {
        fill: 'blue',
        x: 150,
        y: 150,
      },
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];
const data03 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

export default class Start extends Component {

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Separator className="mb-3" />
            <h1 className="m-0 p-0">REPORTE 5 - Visualizador de registros y etiquetas</h1>
            <Separator className="mb-3 mt-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6 d-flex align-items-center">
            <h4><i className="lni lni-angle-double-right"></i> Composición del reporte</h4>
          </Colxx>
          <Colxx xxs="6" className="mb-6 d-flex align-items-center">
            <h4><i className="lni lni-angle-double-right"></i> Visualización de registro individual</h4>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="5" className="mb-6">
            <FormGroup>
              <Label for="exampleSelect">Seleccionar trimestre de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Marzo</option>
              </Input>
            </FormGroup>
            <PieChart width={400} height={400}>
              <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
              <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#333" label />
              <Pie data={data03} dataKey="value" cx={200} cy={200} innerRadius={100} outerRadius={130} fill="#82ca9d" label />
            </PieChart>
          </Colxx>
          <Colxx xxs="2" className="mb-6"></Colxx>
          <Colxx xxs="5" className="mb-6">
            <FormGroup>
              <Label for="exampleSelect">Seleccionar trimestre de consulta</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </Input>
            </FormGroup>
            <div id="container" class="svg-container">
              <div id="treeWrapper" style={{ width: '100%', height: '250px' }}>
                <Tree data={myTreeData} nodeSvgShape={myTreeData.shape} />
              </div>
            </div>
          </Colxx>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Colxx xxs="12" className="mb-12">
            <Separator className="mb-3" />
            <h4><i className="lni lni-angle-double-right"></i> Errores de estructura por etiqueta en reporte</h4>
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

          </Colxx>
        </Row>
      </Fragment >
    )
  }
}
