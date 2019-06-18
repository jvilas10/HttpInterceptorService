import { Component } from '@angular/core';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _apiService:ApiService) { }

  ngOnInit() {
    this.checkService();
    }

    checkService(){

      const params = { };
          this._apiService.get('load/GetTerminals', params).subscribe(
            (data) => {
               console.log(data);
            });

      }
}

