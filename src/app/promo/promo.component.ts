import { Component, OnInit } from '@angular/core';
import { PromoService } from '../promo.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  record : any = {};
  constructor(private promoService : PromoService) { }

  ngOnInit(): void {
    debugger;

    this.getCallTest();

    this.promoService.search().then(result=> {
      debugger;
      console.log("PromiseData : "+result);
      if (result != undefined) {
        debugger;
        this.record = result;
        this.record.forEach(element => {
          console.log("record : ",element)
        });
      
      }
    });


//getCallTest() {}
      
  }
  
 getCallTest() {
   this.promoService.getRate().then(data => {
    debugger;
    console.log("Async await data : ",JSON.stringify(data))
}); 
}
 

}
