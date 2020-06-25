import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../app/user.service';
import { ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';
import { empty, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class UserResolverService implements Resolve<any> {

  record : any[]=[];
  constructor(private userService : UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;
    return this.userService.getUser();
    //.subscribe ((data : any) => {
    //  debugger;
    //  this.record = data;
    //  console.log("from resolver service : ", this.record);
     // return this.record;
    //});

    
   /// return this.userService.getUser().pipe(
    ///  (error) => {
    //  return of('No data');
    //  });
  }
}
