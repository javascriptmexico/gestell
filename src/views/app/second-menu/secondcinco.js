import React, { Component, Fragment } from "react";
import { Row, FormGroup, Label, Input, Table } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class Secondcinco extends Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.SankeyDiagram);

        chart.paddingRight = 20;

        chart.data = [
            { from: "A", to: "D", value: 10 },
            { from: "B", to: "D", value: 8 },
            { from: "B", to: "E", value: 4 },
            { from: "C", to: "E", value: 3 },
            { from: "D", to: "G", value: 5 },
            { from: "D", to: "I", value: 2 },
            { from: "D", to: "H", value: 3 },
            { from: "E", to: "H", value: 6 },
            { from: "G", to: "J", value: 5 },
            { from: "I", to: "J", value: 1 },
            { from: "H", to: "J", value: 9 }
        ];

        let hoverState = chart.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 0.6;

        chart.dataFields.fromName = "from";
        chart.dataFields.toName = "to";
        chart.dataFields.value = "value";

        // for right-most label to fit
        chart.paddingRight = 30;

        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        nodeTemplate.inert = true;
        nodeTemplate.readerTitle = "Drag me!";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.width = 20;

        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

        this.chart = chart;

        let chart2 = am4core.create("chartdiv2", am4charts.SankeyDiagram);

        chart2.paddingRight = 20;

        chart2.data = [
            { from: "A", to: "D", value: 10 },
            { from: "B", to: "D", value: 8 },
            { from: "B", to: "E", value: 4 },
            { from: "C", to: "E", value: 3 },
            { from: "D", to: "G", value: 5 },
            { from: "D", to: "I", value: 2 },
            { from: "D", to: "H", value: 3 },
            { from: "E", to: "H", value: 6 },
            { from: "G", to: "J", value: 5 },
            { from: "I", to: "J", value: 1 },
            { from: "H", to: "J", value: 9 }
        ];

        let hoverState2 = chart2.links.template.states.create("hover");
        hoverState2.properties.fillOpacity = 0.6;

        chart2.dataFields.fromName = "from";
        chart2.dataFields.toName = "to";
        chart2.dataFields.value = "value";

        // for right-most label to fit
        chart2.paddingRight = 30;

        // make nodes draggable
        var nodeTemplate = chart2.nodes.template;
        nodeTemplate.inert = true;
        nodeTemplate.readerTitle = "Drag me!";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.width = 20;

        // make nodes draggable
        var nodeTemplate = chart2.nodes.template;
        nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

        this.chart2 = chart2;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
        if (this.chart2) {
            this.chart2.dispose();
        }
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12" className="mb-4">
                        <Separator className="mb-3" />
                        <h1 className="m-0">REPORTE 8 - Transferencias Internacionales de Fondos de Personas Físicas mayores de 80 años, menores de edad y Personas morales con menos de 3 años de constitución</h1>
                        <Separator className="mb-3 mt-3" />
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="6" className="mb-6 d-flex align-items-center">
                        <h4><i className="lni lni-angle-double-right"></i> Flujo de transferencias envío/recepción de Personas físicas mayores de 60 años y menores de edad</h4>
                    </Colxx>
                    <Colxx xxs="6" className="mb-6 d-flex align-items-center">
                        <h4><i className="lni lni-angle-double-right"></i> Flujo de transferencias envío/recepción de Personas físicas con menos de 3 años de constitución</h4>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="6" className="mb-6">
                        <FormGroup>
                            <Label for="exampleSelect">Seleccionar trimestre de consulta</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </Input>
                        </FormGroup>
                        <div id="chartdiv" style={{ width: "100%", height: "350px", marginBottom: '50px' }}></div>
                    </Colxx>
                    <Colxx xxs="6" className="mb-6">
                        <FormGroup>
                            <Label for="exampleSelect">Seleccionar trimestre de consulta</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </Input>
                        </FormGroup>
                        <div id="chartdiv2" style={{ width: "100%", height: "350px", marginBottom: '50px' }}></div>
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="6">
                        <Separator className="mb-3" />
                        <h4><i className="lni lni-angle-double-right"></i> Flujos mensuales enviados hacia México desde paises en vías de desarrollo considerados como de riesgo alto en materia de PLD/FT por la European Comission</h4>
                        <Separator className="mb-3" />
                    </Colxx>
                    <Colxx xxs="6">
                        <Separator className="mb-3" />
                        <h4><i className="lni lni-angle-double-right"></i> Monedas / Montos mensuales recibidos desde paises en vías de desarrollo considerados como de riesgo alto en materia de PLD/FT por el European Comission</h4>
                        <Separator className="mb-3" />
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="6" className="mb-6">
                        <FormGroup>
                            <Label for="exampleSelect">Seleccionar trimestre de consulta</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </Input>
                        </FormGroup>
                        <Table style={{
                            background: '#dedede',
                            display: 'block',
                            overflow: 'auto',
                            height: '290px'
                        }}>
                            <tbody>
                                <tr>
                                    <th scope="row">Nombre</th>
                                    <td scope="row">Apellido Paterno</td>
                                    <td scope="row">Apellido Materno</td>
                                    <td scope="row">Fecha de Nacimiento</td>
                                    <td scope="row">Edad (años)</td>
                                    <td scope="row">Envío/Recepción</td>
                                    <td scope="row">Moneda</td>
                                    <td scope="row">Monto</td>
                                    <td scope="row">País Destino</td>
                                    <td scope="row">Países que envía a México</td>
                                    <td scope="row">Países destino de baja imposición fiscal</td>
                                    <td scope="row">Beneficiarios Envío</td>
                                </tr>
                                <tr>
                                    <th scope="row">Alejandro</th>
                                    <td>Juarez</td>
                                    <td>Vazquez</td>
                                    <td>19092020</td>
                                    <td>35</td>
                                    <td>Envío</td>
                                    <td>USD</td>
                                    <td>$ 1,909,000,788.00</td>
                                    <td>Canadá</td>
                                    <td>N/A</td>
                                    <td>No</td>
                                    <td>GoldCorp Inc</td>
                                </tr>
                                <tr>
                                    <th scope="row">Alejandro</th>
                                    <td>Juarez</td>
                                    <td>Vazquez</td>
                                    <td>19092020</td>
                                    <td>35</td>
                                    <td>Envío</td>
                                    <td>USD</td>
                                    <td>$ 1,909,000,788.00</td>
                                    <td>Canadá</td>
                                    <td>N/A</td>
                                    <td>No</td>
                                    <td>GoldCorp Inc</td>
                                </tr>
                                <tr>
                                    <th scope="row">Alejandro</th>
                                    <td>Juarez</td>
                                    <td>Vazquez</td>
                                    <td>19092020</td>
                                    <td>35</td>
                                    <td>Envío</td>
                                    <td>USD</td>
                                    <td>$ 1,909,000,788.00</td>
                                    <td>Canadá</td>
                                    <td>N/A</td>
                                    <td>No</td>
                                    <td>GoldCorp Inc</td>
                                </tr>
                                <tr>
                                    <th scope="row">Alejandro</th>
                                    <td>Juarez</td>
                                    <td>Vazquez</td>
                                    <td>19092020</td>
                                    <td>35</td>
                                    <td>Envío</td>
                                    <td>USD</td>
                                    <td>$ 1,909,000,788.00</td>
                                    <td>Canadá</td>
                                    <td>N/A</td>
                                    <td>No</td>
                                    <td>GoldCorp Inc</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Colxx>
                    <Colxx xxs="6" className="mb-6">
                        <FormGroup>
                            <Label for="exampleSelect">Seleccionar trimestre de consulta</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </Input>
                        </FormGroup>
                        <Table style={{
                            background: '#dedede',
                            display: 'block',
                            overflow: 'auto',
                            height: '290px'
                        }}>
                            <tbody>
                                <tr>
                                    <th scope="row">Denominación o Razón Social</th>
                                    <td scope="row">Fecha de Constitución</td>
                                    <td scope="row">Temporalidad (Meses)</td>
                                    <td scope="row">Envío/Recepción</td>
                                    <td scope="row">Monto</td>
                                    <td scope="row">País Destino</td>
                                    <td scope="row">Países que envía a México</td>
                                    <td scope="row">Paíse destino de baja imposición fiscal</td>
                                    <td scope="row">Beneficios Envío</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tor MSA de S.A de C.V</th>
                                    <td>2019/04/30</td>
                                    <td>12</td>
                                    <td>Envío</td>
                                    <td>USD</td>
                                    <td>$ 1,909,788.00</td>
                                    <td>Canadá</td>
                                    <td>N/A</td>
                                    <td>No</td>
                                    <td>GoldCorp Inc</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Colxx>
                </Row>
            </Fragment>
        )
    }
}
