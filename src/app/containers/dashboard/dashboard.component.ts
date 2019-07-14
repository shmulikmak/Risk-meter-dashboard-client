import { Component, OnInit } from '@angular/core';
import { RiskDataService } from '../../services/risk-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public clearTitle = 'CLEAR';
  public darkTitle = 'DARK';
  public progressBarData: number;
  public clearSeverities: object;
  public clearTypes: object;
  public clearsSources: object;
  public darkSeverities: object;
  public darkSources: object;
  public darkTypes: object;

  constructor(private riskDataService: RiskDataService) { }

  ngOnInit() {

    this.riskDataService.getRiskDataCalculated().subscribe(res => {
      this.progressBarData = res;
    });

    this.riskDataService.getClearAndDarkData().subscribe(res => {
      this.clearSeverities = res.clearSeverities;
      this.clearTypes = res.clearTypes;
      this.clearsSources = res.clearsSources;
      this.darkSeverities = res.darkSeverities;
      this.darkSources = res.darkSources;
      this.darkTypes = res.darkTypes;
    });

  }

}
