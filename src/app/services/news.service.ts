import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Article, NewsResponse} from '../interfaces';
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  constructor(private http:HttpClient){}

  getTopHeadLines(){
    
    return this.http.get<NewsResponse>('https://newsapi.org/v2/everything?q=tesla&from=2022-11-11&sortBy=publishedAt&apiKey=05a27e1349494a0e8618e705f61d78fc');
    params:{apiKey}
  }
}
