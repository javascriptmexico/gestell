import React, { Component, Fragment } from "react";
import { Chart } from "react-google-charts";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

export default class Fourthuno extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">ÍNDICE SECCIÓN 4 - Mapeo de Metadatos</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 4 - Mapeo de Metadatos</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 1:  Metadata</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
              <Chart
  width={'100%'}
  height={'450px'}
  chartType="Sankey"
  loader={<div>Loading Chart</div>}
  data={[
    ['From', 'To', 'Weight'],
    ['Brazil', 'Portugal', 5],
    ['Brazil', 'France', 1],
    ['Brazil', 'Spain', 1],
    ['Brazil', 'England', 1],
    ['Canada', 'Portugal', 1],
    ['Canada', 'France', 5],
    ['Canada', 'England', 1],
    ['Mexico', 'Portugal', 1],
    ['Mexico', 'France', 1],
    ['Mexico', 'Spain', 5],
    ['Mexico', 'England', 1],
    ['USA', 'Portugal', 1],
    ['USA', 'France', 1],
    ['USA', 'Spain', 1],
    ['USA', 'England', 5],
    ['Portugal', 'Angola', 2],
    ['Portugal', 'Senegal', 1],
    ['Portugal', 'Morocco', 1],
    ['Portugal', 'South Africa', 3],
    ['France', 'Angola', 1],
    ['France', 'Senegal', 3],
    ['France', 'Mali', 3],
    ['France', 'Morocco', 3],
    ['France', 'South Africa', 1],
    ['Spain', 'Senegal', 1],
    ['Spain', 'Morocco', 3],
    ['Spain', 'South Africa', 1],
    ['England', 'Angola', 1],
    ['England', 'Senegal', 1],
    ['England', 'Morocco', 2],
    ['England', 'South Africa', 7],
    ['South Africa', 'China', 5],
    ['South Africa', 'India', 1],
    ['South Africa', 'Japan', 3],
    ['Angola', 'China', 5],
    ['Angola', 'India', 1],
    ['Angola', 'Japan', 3],
    ['Senegal', 'China', 5],
    ['Senegal', 'India', 1],
    ['Senegal', 'Japan', 3],
    ['Mali', 'China', 5],
    ['Mali', 'India', 1],
    ['Mali', 'Japan', 3],
    ['Morocco', 'China', 5],
    ['Morocco', 'India', 1],
    ['Morocco', 'Japan', 3],
  ]}
  rootProps={{ 'data-testid': '2' }}
/>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
