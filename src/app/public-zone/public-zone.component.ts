import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-public-zone',
  templateUrl: './public-zone.component.html',
  styleUrls: ['./public-zone.component.css']
})
export class PublicZoneComponent implements OnInit {

  currentLang = "th";

  constructor(private tranService: TranslateService) { }

  ngOnInit() {
  }

  changeLang(){
    this.currentLang = this.currentLang=="en"?"th":"en";
    this.tranService.use(this.currentLang);
  }

}
