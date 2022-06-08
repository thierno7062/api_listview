/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NewsFeedsService } from '../services/news-feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: any;

  constructor(private newsServices: NewsFeedsService) {
    this.loadNews();
  }
  loadNews(){
    this.newsServices.getNews("top-headlines?country=us").subscribe(news => {
      this.articles = news['articles'];
      console.log(this.articles);
    });

  }

}
