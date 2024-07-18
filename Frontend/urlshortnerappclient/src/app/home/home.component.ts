import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UrlshortenerService } from '../services/urlshortenerservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  urlForm!: FormGroup;
  generatedUrl: string | undefined;

  constructor(private urlshortenerService: UrlshortenerService) {

  }
  ngOnInit() {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.urlForm = new FormGroup({ longUrl: new FormControl('', [Validators.required, Validators.pattern(reg)]) })
  }
  generateUrl() {

    console.log(this.urlForm)
    // if (this.urlForm.valid) {
      var longUrl = this.urlForm.controls['longUrl'].value;
      this.urlshortenerService.generateUrl(longUrl).subscribe({
        next: (data) => {
          console.log(data);
          this.generatedUrl = data.generatedUrl;

        }, error: (error) => { console.error(error); }
      }
      );
    // }
  }
}
