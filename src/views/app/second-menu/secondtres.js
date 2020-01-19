import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis,
  } from 'recharts';
import { Chart } from "react-google-charts";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

const data = [
    {
      subject: 'Math', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Chinese', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'English', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Geography', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'History', A: 65, B: 85, fullMark: 150,
    },
  ];

  const datados = [
    {
      subject: 'Math', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Chinese', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'English', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Geography', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'History', A: 65, B: 85, fullMark: 150,
    },
  ];

export default class Secondtres extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">SECCIÓN 2 - Análisis Estadístico/Descriptivo de los datos</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 2 Estadístico Descriptivo</h2>
                
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="6" className="mb-4">
                <h3 style={{color: '#e3a511'}}>Reporte 6 -Gráfico Estrella</h3>
              </Colxx>
              <Colxx xxs="6" className="mb-4">
                <h3 style={{color: '#e3a511'}}>Reporte 7 -Gráfico Q-Q Comparación de Muestra Poblacional y Muestra Aleatoria</h3>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="4" className="mb-4">
                <RadarChart cx={190} cy={200} outerRadius={150} width={500} height={500} data={datados}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
              </Colxx>
              <Colxx xxs="4" className="mb-4">
                <RadarChart cx={190} cy={200} outerRadius={150} width={500} height={500} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
              </Colxx>
              <Colxx xxs="4" className="mb-4">
              <Chart
  width={'100%'}
  height={'400px'}
  chartType="ScatterChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Age', 'Weight'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ]}
  options={{
    title: 'Age vs. Weight comparison',
    hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
    vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
    legend: 'none',
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
