import { Component, OnInit } from '@angular/core';
import { TransferMoneyService } from './transfer-money.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss'],
})
export class TransferMoneyComponent implements OnInit {
  constructor(private transferMoneyService: TransferMoneyService) {}

  ngOnInit(): void {
    this.transferMoneyService.getHelloWorld().subscribe(
      (value: any) => {
        console.log(value);
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
}
