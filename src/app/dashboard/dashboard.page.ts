import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  shipName: string;
  shipSize: number;
  holds: { name: string, quantity: number, weight: number, price: number }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.shipName = params.shipName;
      this.shipSize = params.shipSize;

      if (params.holds) {
        this.holds = JSON.parse(params.holds);
      }
    });
  }
}