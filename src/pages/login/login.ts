import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, AlertController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {name: '', password: ''};
  toastCtrl: any;

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController,
              public forgotCtrl: AlertController) {
  }
  ngOnInit(){
    this.menuCtrl.enable(false);
  }

  login() {
    this.navCtrl.setRoot(TabsPage, {user: this.user.name});
  }
  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Te olvidaste la contraseña?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Se ha enviado con exito a tu email',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
