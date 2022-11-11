import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';
const apiKey = environment.apiKey
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.newService.getTopHeadLines()
    .subscribe(resp => {
      console.log(resp);
    });
  }

}
