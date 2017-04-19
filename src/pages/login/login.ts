import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { LoginService } from '../../providers/login-service';
import { SigninPage } from '../signin/signin';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;
  usuario: User

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public service: LoginService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { }

  ionViewDidLoad() {

  }

  login() {

    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();

    this.service.login(this.username, this.password).subscribe(res => {
      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        this.usuario = res.user;
        this.navCtrl.push(HomePage);
        this.storage.set('tipo', this.usuario.tipo);
        this.storage.set("logged", true);
      } else {
        this.toastCtrl.create({ message: "Usuario o password invalid", duration: 3000 }).present();
      }

    }, err => {
      console.log(JSON.stringify(err));
    });

  }

  signin(){
    this.navCtrl.push(SigninPage);
  }

}
