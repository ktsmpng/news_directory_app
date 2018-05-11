import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage} from '../news/news';
import { SettingsPage} from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsPage = NewsPage;
  settingsPage = SettingsPage;
  constructor(public navCtrl: NavController) {

  }

}
