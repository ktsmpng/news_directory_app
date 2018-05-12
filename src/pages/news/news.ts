import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsapiProvider} from '../../providers/newsapi/newsapi';
import {Storage} from '@ionic/storage';
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
  titlesize: number;
  descriptionsize: number;
  source: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public newsapiProvider: NewsapiProvider, private storage: Storage) {
    
  }

  ionViewDidLoad() {
    
    this.storage.get("fontSizeTitle")
      .then((data)=>{
        this.titlesize = data;
      })
      .catch((error)=> alert("Problem accessing local storage"));
    this.storage.get("fontSizeDescription")
      .then((data)=>{
        this.descriptionsize = data;
      })
      .catch((error)=> alert("Problem accessing local storage"));

    this.storage.get("source")
      .then((data)=>{
        this.newsapiProvider.getArticles(data).subscribe(data2=>{
          this.articles = data2.articles;
        });
      })
      .catch((error)=> alert("Problem accessing local storage"));
      
  }

}
