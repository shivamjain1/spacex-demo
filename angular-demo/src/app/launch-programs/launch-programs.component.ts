import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-launch-programs',
  templateUrl: './launch-programs.component.html',
  styleUrls: ['./launch-programs.component.css']
})
export class LaunchProgramsComponent implements OnInit {
  launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  success = [{key: 'True', val: true}, {key: 'False', val: false}];
  launchData = [];
  isLoading = false;
  currentSelectedYear: number;
  currentLaunchSuccessIndex: number;
  currentLandSuccessIndex: number;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.isLoading = true;
    this.service.getAllLaunchDetails()
      .subscribe(resp => {
        this.launchData = resp;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
  }

  getLaunchByYear(ind): any {
    this.currentSelectedYear = ind;
    this.makeApiCall();
  }

  filterByLaunchSuccess(ind): any {
    this.currentLaunchSuccessIndex = ind;
    this.makeApiCall();
  }

  filterByLandSuccess(ind): any {
    this.currentLandSuccessIndex = ind;
    this.makeApiCall();
  }

  getQueryString(): any {
    const launch = this.currentLaunchSuccessIndex == null ? '' : '&launch_success=' + this.success[this.currentLaunchSuccessIndex].val;
    const land = this.currentLandSuccessIndex == null ? '' : '&land_success=' + this.success[this.currentLandSuccessIndex].val;
    const year = this.currentSelectedYear == null ? '' : '&launch_year=' + this.launchYears[this.currentSelectedYear];

    return launch + land + year;
  }

  makeApiCall(): any {
    const queryString = this.getQueryString();
    this.service.getFilteredData(queryString)
      .subscribe(res => {
        this.launchData = res;
      }, err => {
        console.log(err);
      });
  }

}
