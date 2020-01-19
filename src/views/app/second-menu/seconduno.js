import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { Chart } from "react-google-charts";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

export default class Seconduno extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">SECCIÓN 2 - Análisis Estadístico/Descriptivo de los datos</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 2 Estadístico Descriptivo</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 4: Análisis Estadístico/ Descriptivo</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="4" className="mb-4">
                <Chart
                  width={'500px'}
                  height={'300px'}
                  chartType="Table"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      { type: 'string', label: 'Name' },
                      { type: 'number', label: 'Salary' },
                      { type: 'boolean', label: 'Full Time Employee' },
                    ],
                    ['Mike', { v: 10000, f: '$10,000' }, true],
                    ['Jim', { v: 8000, f: '$8,000' }, false],
                    ['Alice', { v: 12500, f: '$12,500' }, true],
                    ['Bob', { v: 7000, f: '$7,000' }, true],
                  ]}
                  options={{
                    showRowNumber: true,
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Colxx>
              <Colxx xxs="8" className="mb-4">
                <Chart
                  width={'100%'}
                  height={'400px'}
                  chartType="TreeMap"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      'Location',
                      'Parent',
                      'Market trade volume (size)',
                      'Market increase/decrease (color)',
                    ],
                    ['Global', null, 0, 0],
                    ['America', 'Global', 0, 0],
                    ['Europe', 'Global', 0, 0],
                    ['Asia', 'Global', 0, 0],
                    ['Australia', 'Global', 0, 0],
                    ['Africa', 'Global', 0, 0],
                    ['Brazil', 'America', 11, 10],
                    ['USA', 'America', 52, 31],
                    ['Mexico', 'America', 24, 12],
                    ['Canada', 'America', 16, -23],
                    ['France', 'Europe', 42, -11],
                    ['Germany', 'Europe', 31, -2],
                    ['Sweden', 'Europe', 22, -13],
                    ['Italy', 'Europe', 17, 4],
                    ['UK', 'Europe', 21, -5],
                    ['China', 'Asia', 36, 4],
                    ['Japan', 'Asia', 20, -12],
                    ['India', 'Asia', 40, 63],
                    ['Laos', 'Asia', 4, 34],
                    ['Mongolia', 'Asia', 1, -5],
                    ['Iran', 'Asia', 18, 13],
                    ['Pakistan', 'Asia', 11, -52],
                    ['Egypt', 'Africa', 21, 0],
                    ['S. Africa', 'Africa', 30, 43],
                    ['Sudan', 'Africa', 12, 2],
                    ['Congo', 'Africa', 10, 12],
                    ['Zaire', 'Africa', 8, 10],
                  ]}
                  options={{
                    minColor: '#f00',
                    midColor: '#ddd',
                    maxColor: '#0d0',
                    headerHeight: 15,
                    fontColor: 'black',
                    showScale: true,
                    generateTooltip: (row, size, value) => {
                      return (
                        '<div style="background:#fd9; padding:10px; border-style:solid"> ' +
                        value +
                        '</div>'
                      )
                    },
                  }}
                  rootProps={{ 'data-testid': '3' }}
                />
              </Colxx>
              </Row>
          </Fragment>
        )
    }
}
