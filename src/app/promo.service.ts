import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  api: string = "https://jsonplaceholder.typicode.com/posts";
  private currentPriceUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private http : HttpClient) { }

  search() {
    return this.http.get(this.api).toPromise();
  }

  async getRate() : Promise<any> {
    const res = await this.http.get(this.currentPriceUrl).toPromise();
    return res;
  }
}
