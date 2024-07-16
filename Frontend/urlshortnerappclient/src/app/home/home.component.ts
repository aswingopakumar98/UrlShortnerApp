import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { UrlshortenerserviceService } from '../services/urlshortenerservice.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  urlForm!: FormGroup;

  constructor(private urlshortenerService: UrlshortenerserviceService) {

  }
  ngOnInit() {
    this.urlForm = new FormGroup({ longUrl: new FormControl() })
  }
  generateUrl() {
   // console.log(this.urlForm)
    var longUrl = this.urlForm.controls['longUrl'].value;
    this.urlshortenerService.generateUrl(longUrl).subscribe({
      next: (data) => {
        console.log(data);
      }, error: (error) => { console.error(error); }
    }
    );
  }
}
