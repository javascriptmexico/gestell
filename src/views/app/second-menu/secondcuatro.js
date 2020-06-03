import React, { Component, Fragment } from "react";
import { Row, FormGroup, Label, Input } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class Secondtres extends Component {
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

    let chartTester = am4core.create("chartTester", am4charts.SankeyDiagram);

    chartTester.paddingRight = 20;

    chartTester.data = [
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

    let hoverStatechartTester = chartTester.links.template.states.create("hover");
    hoverStatechartTester.properties.fillOpacity = 0.6;

    chartTester.dataFields.fromName = "from";
    chartTester.dataFields.toName = "to";
    chartTester.dataFields.value = "value";

    // for right-most label to fit
    chartTester.paddingRight = 30;

    // make nodes draggable
    var nodeTemplate = chartTester.nodes.template;
    nodeTemplate.inert = true;
    nodeTemplate.readerTitle = "Drag me!";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.width = 20;

    // make nodes draggable
    var nodeTemplate = chartTester.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

    this.chartTester = chartTester;

    var chart2 = am4core.create("chartdiv2", am4charts.XYChart);

    chart2.data = [{
      "year": "2003",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1.2,
      "meast": 0.2,
      "africa": 0.1
    }, {
      "year": "2004",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 1.3,
      "meast": 0.3,
      "africa": 0.1
    }, {
      "year": "2005",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 1.4,
      "meast": 0.3,
      "africa": 0.1
    }];

    var categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    var valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Expenditure (M)";

    function createSeries(field, name, stacked) {
      var series = chart2.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries("europe", "Europe", false);
    createSeries("namerica", "North America", true);
    createSeries("asia", "Asia", false);
    createSeries("lamerica", "Latin America", true);
    createSeries("meast", "Middle East", true);
    createSeries("africa", "Africa", true);

    chart2.legend = new am4charts.Legend();

    this.chart2 = chart2;

    var chart2Tester = am4core.create("chart2Tester", am4charts.XYChart);

    chart2Tester.data = [{
      "year": "2003",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1.2,
      "meast": 0.2,
      "africa": 0.1
    }, {
      "year": "2004",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 1.3,
      "meast": 0.3,
      "africa": 0.1
    }, {
      "year": "2005",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 1.4,
      "meast": 0.3,
      "africa": 0.1
    }];

    var categoryAxis = chart2Tester.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    var valueAxis = chart2Tester.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Expenditure (M)";

    function createSerieschart2Tester(field, name, stacked) {
      var series = chart2Tester.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSerieschart2Tester("europe", "Europe", false);
    createSerieschart2Tester("namerica", "North America", true);
    createSerieschart2Tester("asia", "Asia", false);
    createSerieschart2Tester("lamerica", "Latin America", true);
    createSerieschart2Tester("meast", "Middle East", true);
    createSerieschart2Tester("africa", "Africa", true);

    chart2Tester.legend = new am4charts.Legend();

    this.chart2Tester = chart2Tester;
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
            <h1 className="m-0">REPORTE 7 - Flujos de Transferencias Internacionales de Fondos enviados a México</h1>
            <Separator className="mb-3 mt-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6 d-flex align-items-center">
            <h4><i className="lni lni-angle-double-right"></i> Flujos mensuales enviados hacia México</h4>
          </Colxx>
          <Colxx xxs="6" className="mb-6 d-flex align-items-center">
            <h4><i className="lni lni-angle-double-right"></i> Monedas / Montos mensuales recibidas por país</h4>
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
            <div id="chartTester" style={{ width: "100%", height: "350px" }}></div>
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
            <div id="chart2Tester" style={{ width: "100%", height: "350px" }}></div>
          </Colxx>
        </Row>
      </Fragment>
    )
  }
}
