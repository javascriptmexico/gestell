import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { Chart } from "react-google-charts";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

export default class Second extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">SECCIÓN 2 - Análisis Estadístico/Descriptivo de los datos</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 1 Análisis exploratorio</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 1: Media y diagrama de dispersión</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="6" className="mb-4">
              <Chart
                width={'100%'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    { type: 'number', label: 'x' },
                    { type: 'number', label: 'values' },
                    { id: 'i0', type: 'number', role: 'interval' },
                    { id: 'i1', type: 'number', role: 'interval' },
                    { id: 'i2', type: 'number', role: 'interval' },
                    { id: 'i2', type: 'number', role: 'interval' },
                    { id: 'i2', type: 'number', role: 'interval' },
                    { id: 'i2', type: 'number', role: 'interval' },
                  ],
                  [1, 100, 90, 110, 85, 96, 104, 120],
                  [2, 120, 95, 130, 90, 113, 124, 140],
                  [3, 130, 105, 140, 100, 117, 133, 139],
                  [4, 90, 85, 95, 85, 88, 92, 95],
                  [5, 70, 74, 63, 67, 69, 70, 72],
                  [6, 30, 39, 22, 21, 28, 34, 40],
                  [7, 80, 77, 83, 70, 77, 85, 90],
                  [8, 100, 90, 110, 85, 95, 102, 110],
                ]}
                options={{
                  title: 'Bar/area interval chart',
                  curveType: 'function',
                  intervals: { color: 'series-color' },
                  interval: {
                    i0: {
                      color: '#4374E0',
                      style: 'bars',
                      barWidth: 0,
                      lineWidth: 4,
                      pointSize: 10,
                      fillOpacity: 1,
                    },
                    i1: {
                      color: '#E49307',
                      style: 'bars',
                      barWidth: 0,
                      lineWidth: 4,
                      pointSize: 10,
                      fillOpacity: 1,
                    },
                    i2: { style: 'area', curveType: 'function', fillOpacity: 0.3 }
                    
                  },
                  legend: 'none',
                  backgroundColor: 'transparent'
                }}
                rootProps={{ 'data-testid': '8' }}
              />
              </Colxx>
              <Colxx xxs="6" className="mb-4">
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
