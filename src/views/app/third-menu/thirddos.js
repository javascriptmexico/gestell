import React, { Component, Fragment } from "react";
import {
    BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

const data = [
    { name: '1', uv: 300, pv: 456 },
    { name: '2', uv: -145, pv: 230 },
    { name: '3', uv: -100, pv: 345 },
    { name: '4', uv: -8, pv: 450 },
    { name: '5', uv: 100, pv: 321 },
    { name: '6', uv: 9, pv: 235 },
    { name: '7', uv: 53, pv: 267 },
    { name: '8', uv: 252, pv: -378 },
    { name: '9', uv: 79, pv: -210 },
    { name: '10', uv: 294, pv: -23 },
    { name: '12', uv: 43, pv: 45 },
    { name: '13', uv: -74, pv: 90 },
    { name: '14', uv: -71, pv: 130 },
    { name: '15', uv: -117, pv: 11 },
    { name: '16', uv: -186, pv: 107 },
    { name: '17', uv: -16, pv: 926 },
    { name: '18', uv: -125, pv: 653 },
    { name: '19', uv: 222, pv: 366 },
    { name: '20', uv: 372, pv: 486 },
    { name: '21', uv: 182, pv: 512 },
    { name: '22', uv: 164, pv: 302 },
    { name: '23', uv: 316, pv: 425 },
    { name: '24', uv: 131, pv: 467 },
    { name: '25', uv: 291, pv: -190 },
    { name: '26', uv: -47, pv: 194 },
    { name: '27', uv: -415, pv: 371 },
    { name: '28', uv: -182, pv: 376 },
    { name: '29', uv: -93, pv: 295 },
    { name: '30', uv: -99, pv: 322 },
    { name: '31', uv: -52, pv: 246 },
    { name: '32', uv: 154, pv: 33 },
    { name: '33', uv: 205, pv: 354 },
    { name: '34', uv: 70, pv: 258 },
    { name: '35', uv: -25, pv: 359 },
    { name: '36', uv: -59, pv: 192 },
    { name: '37', uv: -63, pv: 464 },
    { name: '38', uv: -91, pv: -2 },
    { name: '39', uv: -66, pv: 154 },
    { name: '40', uv: -50, pv: 186 },
  ];

export default class Third extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">ÍNDICE SECCIÓN 3 - Análisis de variables categóricas</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 3 - Análisis de variables categóricas:</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 3:  Mes con Mayor Índice de Errores</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <BarChart
                    width={900}
                    height={450}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="name" height={30} stroke="#8884d8" />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
