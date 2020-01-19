import React, { Component, Fragment } from "react";
import { Chart } from "react-google-charts";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

export default class Fourth extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">ÍNDICE SECCIÓN 5 - Comparativo Histórico del Perfilado</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 5 - Comparativo HIstórico del Perfilado</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 1:  Frecuencia semanal de la calidad de los datos una vez que se hizo el Perfilado</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
              <Chart
  width={'100%'}
  height={'550px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Day',
      'Guardians of the Galaxy',
      'The Avengers',
      'Transformers: Age of Extinction',
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ]}
  options={{
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)',
      backgroundColor: 'transparent'
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
