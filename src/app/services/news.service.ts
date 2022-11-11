import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {NewsResponse} from '../interfaces';
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http:HttpClient){}
  getTopHeadLines(): Observable<Article []> {

    return this.http.getN('https://newsapi.org/v2/everything?q=tesla&from=2022-10-08&sortBy=publishedAt&apiKey=05a27e1349494a0e8618e705f61d78fc');
    params:{
      apiKey:apiKey
    }
    .pipe(
      map (resp=>resp.articles)
    );
  }
}
