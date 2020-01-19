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
                <h1 className="m-0">ÍNDICE SECCIÓN 4 - Mapeo de Metadatos</h1>
                <h2>Categoría 1: Perfilamiento de Datos - Sección 4 - Mapeo de Metadatos</h2>
                <h3 style={{color: '#e3a511'}}>Reporte 1:  Mapeo de Metadatos</h3>
                <Separator className="mb-3 mt-3"/>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
              <Chart
  width={'100%'}
  height={450}
  chartType="OrgChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Name', 'Manager', 'ToolTip'],
    [
      {
        v: 'Mike',
        f: 'Mike<div style="color:red; font-style:italic">President</div>',
      },
      '',
      'The President',
    ],
    [
      {
        v: 'Jim',
        f:
          'Jim<div style="color:red; font-style:italic">Vice President</div>',
      },
      'Mike',
      'VP',
    ],
    ['Alice', 'Mike', ''],
    ['Bob', 'Jim', 'Bob Sponge'],
    ['Carol', 'Bob', ''],
  ]}
  options={{
    allowHtml: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
