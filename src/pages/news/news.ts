import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsapiProvider} from '../../providers/newsapi/newsapi';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  articles: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public newsapiProvider: NewsapiProvider) {
    
  }

  ionViewDidLoad() {
    this.newsapiProvider.getArticles().subscribe(data=>{
      this.articles = data.articles;
    });
  }

}
