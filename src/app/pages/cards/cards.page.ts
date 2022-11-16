import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  public articles: Article[]=[];
  constructor( private newService: NewsService) { }
  ngOnInit() {
    this.newService.getTopHeadLines()
    .subscribe(articles => this.articles.push(...articles));
    }
}


