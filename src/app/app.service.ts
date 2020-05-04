import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient : HttpClient) { }

  checkCredential(){
      const headers = new HttpHeaders();
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Methods', 'POST');
      headers.append('Access-Control-Allow-Origin', '*');
      return  this.httpClient.get<any[]>( 'http://localhost:8080/test/csv',{ headers });
  }
}
