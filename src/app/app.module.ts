// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

// components
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SeveritiesComponent } from './components/severities/severities.component';
import { TypesComponent } from './components/types/types.component';
import { SourcesComponent } from './components/sources/sources.component';

// services
import { RiskDataService } from './services/risk-data.service';

// pipes
import { AddSpaceCapitalLetterPipe } from './pipes/add-space-capital-letter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgressBarComponent,
    SeveritiesComponent,
    TypesComponent,
    SourcesComponent,
    AddSpaceCapitalLetterPipe,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    RiskDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
