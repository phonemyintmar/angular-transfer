import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferMoneyService {
  constructor(private http: HttpClient) {}

  getHelloWorld() {
    return this.http.get('http://localhost:8989/web/helloworld', {
      responseType: 'text',
    });
  }
}
