import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlMapping } from '../models/UrlMapping';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlshortenerserviceService {

  constructor(private http: HttpClient) { }

  generateUrl(longUrl: string) {
    var url = "/GenerateUrl";
    // const body={
    //   "LongUrl":longUrl
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(url, JSON.stringify(longUrl),httpOptions
      );
    // return this.http.post<UrlMapping>(url, longUrl);
  }  
  
  public  getStatistics():Observable<UrlMapping[]>  {
    var url = "/Statistics";
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<any>(url,httpOptions
      );
  }  
    
}

