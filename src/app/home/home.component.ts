import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
  }

  relink(url: string): void {
    window.open(url, "_blank");
  }

  downloadCV(): void{
    let link = document.createElement("a");
    link.download = "filename";
    link.href = "./../../assets/CV.pdf";
    link.click();
  }
}
