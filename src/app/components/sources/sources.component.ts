import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  @Input() webSources: object;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
