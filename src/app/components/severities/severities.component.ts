import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-severities',
  templateUrl: './severities.component.html',
  styleUrls: ['./severities.component.scss']
})
export class SeveritiesComponent implements OnInit {
  @Input() webSeverities;
  webSeveritiesOrdered: object;
  @Input() title: string;
  public doughnutChartLabels: Label[] = ['HIGH', 'MEDIUM', 'LOW'];
  public doughnutChartData: MultiDataSet;
  public doughnutChartLegend = false;
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutColors: object = [{ backgroundColor: ['#c33d3d', '#e09e25', '#419fc3'] }];
  public doughnutChartOptions: object = {
    responsive: false,
    borderWidth: 0,
    cutoutPercentage: 87,
    tooltips: {
      enabled: false
    },
    elements: {
      arc: {
        borderWidth: 0
      },
    }
  };

  constructor() { }

  ngOnInit() {
    // order for High, Medium, Low
    this.webSeverities.sort((a, b) => {
      return - (a.sum - b.sum || a._id.severity.localeCompare(b._id.severity));
    });

    this.doughnutChartData = [[
      this.webSeverities[0].sum,
      this.webSeverities[1].sum,
      this.webSeverities[2].sum
    ]];

  }

}
