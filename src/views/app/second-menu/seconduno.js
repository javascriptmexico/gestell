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
                <h1 className="m-0">SECONDUNO</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 2 Análisis exploratorio</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 1: Media y diagrama de dispersión</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
