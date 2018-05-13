import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage} from '../news/news';
import { SettingsPage} from '../settings/settings';
import { Storage } from '@ionic/storage';
import { QuoteapiProvider } from '../../providers/quoteapi/quoteapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsPage = NewsPage;
  settingsPage = SettingsPage;
  myName: string;
  myquote:string;
  myquoteauthor: string;
  constructor(public navCtrl: NavController,public quoteapiProvider: QuoteapiProvider, public storage: Storage) {

  }

  ionViewWillEnter(){
    this.storage.get("myName")
    .then((data)=>{
      if(data == null){
          this.myName = "";
      }else{
          this.myName = data;
      }
    })
    .catch((error)=> alert("Problem accessing local storage"));
    this.quoteapiProvider.getArticles().subscribe(data=>{
      this.myquote = data.contents.quotes[0].quote;
      this.myquoteauthor = data.contents.quotes[0].author;
    });
    
  }
}
