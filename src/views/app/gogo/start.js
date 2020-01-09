import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import {Pie} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
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
export default class Start extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Breadcrumb heading="menu.start" match={this.props.match} />
                <Separator className="mb-3" />
                <h1 className="m-0">SECCIÓN 1 - Análisis Exploratorio</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 1 Análisis exploratorio</h2>
                <h3 style={{color: '#297e36'}}>Reporte 1: Missings</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="4" className="mb-4">
                <h4>Detección de Missings:<br/>Top 10 Columnas con más Porcentaje de Missings</h4>
              </Colxx>
              <Colxx xxs="4" className="mb-4">
                <h4>Porcentaje de missings por columna</h4>
              </Colxx>
              <Colxx xxs="4" className="mb-4">
                <h4>Top 10 Columnas con más Porcentaje de Missings y Porcentaje de Missings por Columna</h4>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="4" className="mb-4">
                <Pie 
                  data={dataPie}
                  width={60}
                  height={50}
                  options={{ maintainAspectRatio: true }}
                />
              </Colxx>
              <Colxx xxs="4" className="mb-4">
                <Bar
                  data={data}
                  width={100}
                  height={100}
                  options={{
                    maintainAspectRatio: true
                  }}
                />
              </Colxx>
              <Colxx xxs="4" className="mb-4">
                <Pie 
                  data={dataPieDos}
                  width={60}
                  height={50}
                  options={{ maintainAspectRatio: true }}
                />
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
