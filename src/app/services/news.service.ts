import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Article, NewsResponse} from '../interfaces';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  constructor(private http:HttpClient){}

  getTopHeadLines(): Observable<Article[]>{
  
    return this.http.get<NewsResponse>('https://newsapi.org/v2/everything?q=tesla&from=2022-11-15&sortBy=publishedAt&apiKey=f5a702d5ee85465a84e12ac9b66f4470',{
    params:{apiKey}
  }).pipe(
    map (resp=> resp.articles)
  );
};

}
