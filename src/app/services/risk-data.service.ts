import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiskData } from '../models/risk-data.model';

@Injectable({
  providedIn: 'root'
})
export class RiskDataService {

  constructor(private http: HttpClient) { }

  // Get Risk Data Calculated
  getRiskDataCalculated(): Observable<number> {
    return this.http.get<number>('/api/risk-meter-data');
  }

  // Get Risk Data Calculated
  getClearAndDarkData(): Observable<RiskData> {
    return this.http.get<RiskData>('/api/dashboard-data');
  }
}
