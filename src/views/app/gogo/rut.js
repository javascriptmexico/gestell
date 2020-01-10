import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import { Chart } from "react-google-charts";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
const dataPie = {
	labels: [
		'Verde',
		'Más Verde',
		'Amarillo'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#8fb51c',
		'#297e36',
		'#dda113'
		],
		hoverBackgroundColor: [
		'#8fb51c',
		'#297e36',
		'#dda113'
		]
	}]
};
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Mis datos de la Fundación',
      backgroundColor: 'rgba(24,41,46,0.5)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const dataPieDos = {
	labels: [
		'Approve',
		'Disapprove',
		'Undecided'
	],
	datasets: [{
		data: [200, 150, 10],
		backgroundColor: [
		'#18292e',
		'#85a261',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#18292e',
		'#85a261',
		'#FFCE56'
		]
	}]
};
export default class Rut extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">SECCIÓN 1 - Análisis Exploratorio</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 1 Análisis exploratorio</h2>
                <h3 style={{color: '#297e36'}}>Reporte 3: Análisis de Frecuencias</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="6" className="mb-4">
                <Chart
                  width={'570px'}
                  height={'400px'}
                  chartType="ComboChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      'Month',
                      'Bolivia',
                      'Ecuador',
                      'Madagascar',
                      'Papua New Guinea',
                      'Rwanda',
                      'Average',
                    ],
                    ['2004/05', 165, 938, 522, 998, 450, 614.6],
                    ['2005/06', 135, 1120, 599, 1268, 288, 682],
                    ['2006/07', 157, 1167, 587, 807, 397, 623],
                    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                    ['2008/09', 136, 691, 629, 1026, 366, 569.6],
                  ]}
                  options={{
                    title: 'Monthly Coffee Production by Country',
                    vAxis: { title: 'Cups' },
                    hAxis: { title: 'Month' },
                    seriesType: 'bars',
                    series: { 5: { type: 'line' } },
                    backgroundColor: 'transparent'
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </Colxx>
              <Colxx xxs="6" className="mb-4">
              <Chart
                width={'570px'}
                height={'400px'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                diffdata={{
                  old: [
                    ['Name', 'Popularity'],
                    ['Cesar', 250],
                    ['Rachel', 4200],
                    ['Patrick', 2900],
                    ['Eric', 8200],
                  ],
                  new: [
                    ['Name', 'Popularity'],
                    ['Cesar', 370],
                    ['Rachel', 600],
                    ['Patrick', 700],
                    ['Eric', 1500],
                  ],
                }}
                options={{
                  legend: { position: 'top' },
                  backgroundColor: 'transparent'
                }}
                rootProps={{ 'data-testid': '4' }}
              />
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
