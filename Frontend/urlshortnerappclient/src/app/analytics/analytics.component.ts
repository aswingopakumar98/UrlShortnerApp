import { Component } from '@angular/core';
import { UrlMapping } from '../models/UrlMapping';
import { UrlshortenerService } from '../services/urlshortenerservice.service';


@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [ ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent   {
  dataSource:UrlMapping[]| undefined;
  constructor(private urlshortenerservice:UrlshortenerService){}
  ngOnInit(){
  
  this.urlshortenerservice.getStatistics().subscribe((data:any)=>{
    this.dataSource=data;
  });
}

}


