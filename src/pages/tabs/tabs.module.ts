import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

// import { ContactPageModule } from '../contact/contact.module';
// import { HomePageModule } from '../home/home.module';
// import { AboutPageModule } from '../about/about.module';


@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    // ContactPageModule,
    // HomePageModule,
    // AboutPageModule
  ],
  exports: [
    TabsPage
  ]
})
export class TabsPageModule {}
