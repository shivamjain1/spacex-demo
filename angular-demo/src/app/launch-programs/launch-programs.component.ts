import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.css']
})
export class LaunchProgramsComponent implements OnInit {
  launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  launchData = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.service.getAllLaunchDetails()
    .subscribe(resp => {
      this.launchData = resp;
    }, err => {
      console.log(err);
    });
  }

}
