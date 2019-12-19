import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studentDetails';
  items: any = [];
  searchText;

  constructor(public http : HttpClient){
    this.getDetails()
  }
  getDetails(){
    let response;
      let url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'
      this.getAllProducts(url).subscribe((res) => {
        if (res != null) {
          response = res.Results
          this.items = response
          console.log("print value",response);
          //console.log(document.getElementById('text').value); 
         
        }
      })
  }

  searchFuction(arg:any):void {
            
  }

  getAllProducts(url){
    return this.http.get<any>(url)
      .pipe(
        map(res => {
          res['data']
          return res;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }
}
