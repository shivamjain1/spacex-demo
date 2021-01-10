import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): any{
    console.log(this.data);
  }

}
