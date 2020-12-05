import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  gridColumns = 4;

  ngOnInit(): void { }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
