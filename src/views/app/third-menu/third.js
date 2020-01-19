import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

export default class Third extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Separator className="mb-3" />
                <h1 className="m-0">ÍNDICE SECCIÓN 3 - Análisis de variables categóricas</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 3 - Análisis de variables categóricas:</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 1: Homologacion</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="6" className="mb-4">

              </Colxx>
              <Colxx xxs="6" className="mb-4">

              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
