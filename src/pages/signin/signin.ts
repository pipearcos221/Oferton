import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';
import { User } from '../../models/user';
import { secret } from '../../app/app.config';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  user: User;
  pin: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public service: LoginService) {
    this.user = new User;    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  sigin() {
    if (this.pin == secret){
      this.service.signin(this.user).subscribe(res =>{
      if (res.success) {        
        this.navCtrl.pop();    
      } else {
        if(res.exist){
          this.toastCtrl.create({ message: "El nombre de usuario ya esta en uso", duration: 3000 }).present();
        }        
      }

    }, err => {
      console.log(JSON.stringify(err));
    });    
    }else{
      this.toastCtrl.create({ message: "El pin es invalido", duration: 3000 }).present();
    }
  }

}
