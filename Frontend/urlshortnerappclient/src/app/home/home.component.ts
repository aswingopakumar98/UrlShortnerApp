import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { UrlshortenerService } from '../services/urlshortenerservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  urlForm!: FormGroup;
  generatedUrl: string|undefined;

  constructor(private urlshortenerService: UrlshortenerService) {

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
        this.generatedUrl=data.generatedUrl;
        
      }, error: (error) => { console.error(error); }
    }
    );
  }
}
