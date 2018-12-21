import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { MRelationCommonDataProvider } from '../../providers/m-relation-common-data/m-relation-common-data';

@IonicPage()
@Component({
  selector: 'page-dash-board',
  templateUrl: 'dash-board.html',
})
export class DashBoardPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  public summary_approve: any;
  public summary_pending: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db_rcmd: MRelationCommonDataProvider) {
    this.db_rcmd.get_all_approve().subscribe((response) => {
      this.summary_approve = response
      this.db_rcmd.get_all_pending().subscribe((response) => {
        this.summary_pending = response
          this.load_chart(this.summary_approve[0].summary, this.summary_pending[0].summary)
      })
    });


  }

  load_chart(summary_approve, summary_pending) {

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["ยืนยันข้อมูลแล้ว", "ยังไม่ถูกยืนยันข้อมูล"],
        datasets: [{
          label: '# of Votes',
          //data: [this.summary_approve['0'].summary, this.summary_pending['0'].summary],
          data: [summary_approve, summary_pending],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }

    });
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["ยืนยันแล้ว", "ยังไม่ถูกยืนยัน"],
        datasets: [{
          label: '# of Votes',
          data: [summary_approve, summary_pending],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }
  popToHomePage() {
    this.navCtrl.popToRoot();
  }
}
