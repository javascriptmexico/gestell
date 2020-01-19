import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
  } from 'recharts';

const data = [
    {
      name: 'Page A', uv: 590, pv: 800, amt: 1400,
    },
    {
      name: 'Page B', uv: 868, pv: 967, amt: 1506,
    },
    {
      name: 'Page C', uv: 1397, pv: 1098, amt: 989,
    },
    {
      name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
    },
    {
      name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
    },
    {
      name: 'Page F', uv: 1400, pv: 680, amt: 1700,
    },
  ];

export default class Secondcuatro extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">SECCIÓN 2 - Análisis Estadístico/Descriptivo de los datos</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 2 Estadístico Descriptivo</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 8 - Cantidad de Columnas perfiladas y utilizadas en el perfilamiento</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-12">
                <ComposedChart
                    layout="vertical"
                    width={950}
                    height={420}
                    data={data}
                    margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
