import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { Chart } from "react-google-charts";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

export default class Seconddos extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">SECCIÓN 2 - Análisis Estadístico/Descriptivo de los datos</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 2 Estadístico Descriptivo</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 5 -Gráfico Paralelo de Correlación entre más de dos variables</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
              <Chart
                width={'100%'}
                height={'500px'}
                chartType="Sankey"
                loader={<div>Loading Chart</div>}
                options={{
                    sankey: {
                    link: { color: { fill: '#d799ae' } },
                    node: {
                        colors: ['#a61d4c'],
                        label: { color: '#871b47' },
                    },
                    },
                }}
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
                rootProps={{ 'data-testid': '3' }}
                />
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
