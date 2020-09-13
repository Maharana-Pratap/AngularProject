import { Component, OnInit , ViewChild, HostListener } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";  
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  users : any[]=[];
  personCountry : any = PERSON_COUNTRY;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();
 // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //dataSource = ELEMENT_DATA;
  //dataSource : any;
  //dataSource : new MatTableDataSource();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor( private SpinnerService: NgxSpinnerService ,
     private router : Router , private activeRoute : ActivatedRoute) {}

  ngOnInit() {
    this.SpinnerService.show();   
    //this.dataSource = ELEMENT_DATA;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator=this.paginator;
    this.SpinnerService.hide();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  showUser() {
   // alert("show user is called");
   debugger
    this.router.navigate(['/users']);
   // this.router.navigateByUrl('/users');
  }

  showTemp() {
    this.router.navigate(['/showTemp']);
  }

  showPromo() {
    // alert("show user is called");
    debugger
     this.router.navigate(['/promise']);
    // this.router.navigateByUrl('/users');
   }

   @HostListener('click',['$event'])
   testListener(event) {
      //alert('You have clicked...!');
   }

   public choose : string = "";
   valueChange(event : any) {
    // alert("value changed...!   "+event.target.value);
      this.choose=event.target.value;
     // alert("value changed...!   "+this.choose);
   }
 
}

/* Static data */ 

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface GroupByCountry {
  country : string;
  person : any[];
}

const PERSON_COUNTRY : GroupByCountry[] = [
  {
    country : "India",
    person : [
    {
      name : "satish Kumar",
    },
    {
      name : "Lakha Kumar",
    },
    {
      name : "jayaint Kumar",
    }
  ]
  },

  {
    country : "USA",
    person : [
    {
      name : "Pintu Kumar",
    },
    {
      name : "Kittu Kumar",
    },
    {
      name : "Priy anka Kumar",
    }
  ]
  }
]
