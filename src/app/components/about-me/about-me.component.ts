import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadEN(): void{
    let link = document.createElement("a");
    link.download = "filename.rar";
    link.href = "./../../../assets/Public.rar";
    link.click();
  }

}
