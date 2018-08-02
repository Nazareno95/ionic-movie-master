	import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyFavoritesPage } from "../my-favorites/my-favorites";
import { NavParams, MenuController } from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyFavoritesPage;

  user: any;
  index = 0;

  constructor(private params: NavParams,
              private menuCtrl: MenuController) {
  }
  ngOnInit() {
    this.user = {user: this.params.data.user};
    this.menuCtrl.enable(true);
    this.index = this.params.data.index;
  }
}
