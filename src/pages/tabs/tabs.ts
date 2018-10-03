import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  myIndex: number;

  constructor(
    public navParams: NavParams
  ) {
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;

    this.myIndex = navParams.data.tabIndex || 0;
  }
}
