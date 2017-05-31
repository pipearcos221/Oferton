import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { NovedadesService } from '../../providers/novedades-service';
import { Novedad } from '../../models/novedad';

@Component({
  selector: 'page-add-novedad',
  templateUrl: 'add-novedad.html'
})
export class AddNovedadPage {

  novedad: Novedad;
  edit: true;
  id: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: NovedadesService,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController) {
    this.edit = navParams.get('edit');
    console.log(this.edit);
    this.novedad = new Novedad();
    this.novedad.imagen = '';
    if (this.edit) {
      this.id = navParams.get('id');
      console.log("id editar: " + this.id)
      this.service.getOne(this.id).subscribe(res => {
        this.novedad = res;
        delete this.novedad._id;
        console.log(this.novedad._id);
      });
    }
  }

  save() {
    this.service.add(this.novedad).subscribe(
      (res) => {
        this.processResponse(res);
      },
      (err) => this.processResponse(false)
    );

  }

  update() {
    this.service.update(this.id, this.novedad).subscribe(
      (res) => {
        this.processResponseu(res);
      },
      (err) => {
        this.processResponseu(false);
        console.log("false")
      }
    );
  }

  processResponse(success: boolean) {
    if (success) {
      console.log('OK');
      this.toastCtrl.create({ message: "Promocion creada exitosamente", duration: 3000 }).present();
      this.navCtrl.pop();
    } else {
      console.log('mal');
      let confirm = this.alertCtrl.create({
        title: 'Error',
        message: 'Hubo un problema al crear la promocion',
        buttons: [
          {
            text: 'Reintentar',
            handler: () => {
              this.save();
              console.log('Reintentar');
            }
          }, {
            text: 'Aceptar',
            handler: () => {
              this.navCtrl.pop();
              console.log('OK');
            }
          }
        ]
      });
      confirm.present();
    }
  }

  processResponseu(success: boolean) {
    if (success) {
      console.log('OK');
      this.toastCtrl.create({ message: "Promocion actualizada exitosamente", duration: 3000 }).present();
      this.navCtrl.pop();
    } else {
      console.log('mal');
      let confirm = this.alertCtrl.create({
        title: 'Error',
        message: 'Hubo un problema al editar la promocion',
        buttons: [
          {
            text: 'Reintentar',
            handler: () => {
              this.update();
              console.log('Reintentar');
            }
          }, {
            text: 'Aceptar',
            handler: () => {
              this.navCtrl.pop();
              console.log('OK');
            }
          }
        ]
      });
      confirm.present();
    }
  }


  imagen() {
    let confirm = this.alertCtrl.create({
      title: 'Insertar imagen',
      message: 'Selecciona una imagen para subirla o tomala ahora ',
      buttons: [
        {
          text: 'Tomar',
          handler: () => {
            this.camara();
            console.log('Camara');
          }
        },
        {
          text: 'Seleccionar',
          handler: () => {
            this.galeria();
            console.log('Galeria');
          }
        }
      ]
    });
    confirm.present();
  }


  camara() {
    Camera.getPicture({ quality: 100, destinationType: Camera.DestinationType.DATA_URL, saveToPhotoAlbum: true }).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.novedad.imagen = base64Image;
    }, (err) => {
      // Handle error
    });
  }

  galeria() {
    Camera.getPicture({ destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.PHOTOLIBRARY }).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.novedad.imagen = base64Image;
    }, (err) => {
      // Handle error
    });
  }




}
