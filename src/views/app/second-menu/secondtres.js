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

    let chartTest = am4core.create("chartTest", am4charts.SankeyDiagram);

    chartTest.paddingRight = 20;

    chartTest.data = [
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

    let hoverStatechartTest = chartTest.links.template.states.create("hover");
    hoverStatechartTest.properties.fillOpacity = 0.6;

    chartTest.dataFields.fromName = "from";
    chartTest.dataFields.toName = "to";
    chartTest.dataFields.value = "value";

    // for right-most label to fit
    chartTest.paddingRight = 30;

    // make nodes draggable
    var nodeTemplate = chartTest.nodes.template;
    nodeTemplate.inert = true;
    nodeTemplate.readerTitle = "Drag me!";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.width = 20;

    // make nodes draggable
    var nodeTemplate = chartTest.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

    this.chartTest = chartTest;

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

    this.chart2Test = chart2Test;

    var chart2Test = am4core.create("chart2Test", am4charts.XYChart);

    chart2Test.data = [{
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

    var categoryAxis = chart2Test.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    var valueAxis = chart2Test.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Expenditure (M)";

    function createSeriesTest(field, name, stacked) {
      var series = chart2Test.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeriesTest("europe", "Europe", false);
    createSeriesTest("namerica", "North America", true);
    createSeriesTest("asia", "Asia", false);
    createSeriesTest("lamerica", "Latin America", true);
    createSeriesTest("meast", "Middle East", true);
    createSeriesTest("africa", "Africa", true);

    chart2Test.legend = new am4charts.Legend();

    this.chart2Test = chart2Test;
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
            <h1 className="m-0">REPORTE 6 - Flujos de Transferencias Internacionales de Fondos enviados fuera de México</h1>
            <Separator className="mb-3 mt-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="6" className="mb-6 d-flex align-items-center">
            <h4><i className="lni lni-angle-double-right"></i> Flujos mensuales enviados fuera de México</h4>
          </Colxx>
          <Colxx xxs="6" className="mb-6 d-flex align-items-center">
            <h4><i className="lni lni-angle-double-right"></i> Monedas / Montos mensuales enviados a cada país</h4>
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
            <h4><i className="lni lni-angle-double-right"></i> Flujos mensuales enviados fuera de México hacia paises de baja imposición fiscal</h4>
            <Separator className="mb-3" />
          </Colxx>
          <Colxx xxs="6">
            <Separator className="mb-3" />
            <h4><i className="lni lni-angle-double-right"></i> Monedas / Montos mensuales enviados a cada país de Baja Imposición fiscal</h4>
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
            <div id="chartTest" style={{ width: "100%", height: "350px" }}></div>
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
            <div id="chart2Test" style={{ width: "100%", height: "350px" }}></div>
          </Colxx>
        </Row>
      </Fragment>
    )
  }
}
