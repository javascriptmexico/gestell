import React, { Component, Fragment } from "react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector
  } from 'recharts';
  import { Chart } from "react-google-charts";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

export default class Third extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">ÍNDICE SECCIÓN 3 - Análisis de variables categóricas</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 3 - Análisis de variables categóricas:</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 2: Errores más Comunes</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="6" className="mb-4">
                <Chart
                width={'100%'}
                height={'400px'}
                chartType="Table"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                    { type: 'string', label: 'Nombre de columna' },
                    { type: 'number', label: 'Descripción' },
                    { type: 'boolean', label: 'Cantidad' },
                    { type: 'boolean', label: 'Fecha' },
                    ],
                    ['Mike', { v: 10000, f: '$10,000' }, true, true],
                    ['Jim', { v: 8000, f: '$8,000' }, false, true],
                    ['Alice', { v: 12500, f: '$12,500' }, true, true],
                    ['Bob', { v: 7000, f: '$7,000' }, true, true],
                ]}
                options={{
                    showRowNumber: true,
                }}
                rootProps={{ 'data-testid': '1' }}
                />
              </Colxx>
              <Colxx xxs="6" className="mb-4">
              <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
    backgroundColor: 'transparent'
  }}
  rootProps={{ 'data-testid': '1' }}
/>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
