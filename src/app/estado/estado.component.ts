import { Component, OnInit } from '@angular/core';
import { ProyectoService } from "../proyecto.service";
import { Observable } from 'rxjs/Observable';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  estadoActual: any;
  estados: any;
  cajaChartProps = {};
  ventasChartProps = {};
  modCobroChartProps = {};

  constructor(private proyectoService: ProyectoService) {
  }

  ngOnInit() {
    this.getEstadoActual();
    this.getEstados();
  }

  getEstadoActual() {
    this.estadoActual = this.proyectoService.getEstado(1).subscribe(estadoActual => {
      this.estadoActual = estadoActual;
      this.setModCobroChartProps(estadoActual);
    })
  }

  getEstados() {
    this.proyectoService.getEstados(1).subscribe(estados => {
      this.estados = estados.filter(e => e.esForecast);
      this.setCajaChartProps(this.estados);
      this.setVentasChartProps(this.estados);
    })
  }

  setCajaChartProps(estados) {
    this.cajaChartProps = {
      options: {
        scaleShowVerticalLines: false,
        responsive: true
      },
      labels: estados.map(estado => `Periodo ${estado.periodo}`),
      type: 'line',
      legend: false,
      data: [
        { data: estados.map(estado => estado.caja), label: 'Caja' }
      ]
    }
  }

  setVentasChartProps(estados) {
    this.ventasChartProps = {
      options: {
        scaleShowVerticalLines: false,
        responsive: true
      },
      labels: estados.map(estado => `Periodo ${estado.periodo}`),
      type: 'line',
      legend: true,
      data: [
        {
          data: estados.map(estado => estado.ventas),
          label: 'Ventas'
        },
        {
          data: estados.map(estado => estado.demandaInsatisfecha ),
          label: 'Demanda Insatisfecha',
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(75, 192, 192)',
          borderDash: [5, 5]
        }
      ]
    }
  }

  setModCobroChartProps(estadoActual) {
    this.modCobroChartProps = {
      options: {
        scaleShowVerticalLines: false,
        responsive: true
      },
      labels: estadoActual.proyecto.modalidadCobro.map(modCobro => `X${modCobro.offsetPeriodo > 0 ? ' + ' + modCobro.offsetPeriodo : ''}`),
      type: 'bar',
      legend: false,
      data: [
        { data: estadoActual.proyecto.modalidadCobro.map(modCobro => modCobro.porcentaje), label: 'Porcentaje' }
      ]
    }
  }

}
