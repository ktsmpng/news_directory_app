import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  myName: string;
  source: string;
  fontSizeTitle: 1;
  fontSizeDescription: 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
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

  save(){
    this.storage.set("myName", this.myName);
    this.storage.set("source", this.source);
    this.storage.set("fontSizeTitle", this.fontSizeTitle);
    this.storage.set("fontSizeDescription", this.fontSizeDescription);
    this.navCtrl.pop();
  } 

}
