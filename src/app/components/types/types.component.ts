import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  @Input() webTypes: object;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
