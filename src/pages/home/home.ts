import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage} from '../news/news';
import { SettingsPage} from '../settings/settings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsPage = NewsPage;
  settingsPage = SettingsPage;
  myName: string;
  constructor(public navCtrl: NavController,public storage: Storage) {

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
  }
}
