import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlshortenerserviceService } from './services/urlshortenerservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'urlshortnerappclient';
  urlForm!: FormGroup;

  constructor(private urlshortenerService: UrlshortenerserviceService) {

  }
  ngOnInit() {
    this.urlForm = new FormGroup({ longUrl: new FormControl() })
  }
  generateUrl() {
    console.log(this.urlForm)
    var longUrl = this.urlForm.controls['longUrl'].value;
    this.urlshortenerService.generateUrl(longUrl).subscribe({
      next: (data) => {
        console.log(data);
      }, error: (error) => { console.error(error); }
    }
    );
  }
}
