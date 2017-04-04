import { Injectable } from '@angular/core';

@Injectable()
export class AlmacenesData {

  data: Almacen[];

  constructor() {
    this.loadData();
  }

  loadData() {
    this.data = [
      { nombre: 'Exito', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Almacenes_exito_logo.svg/245px-Almacenes_exito_logo.svg.png' },
      { nombre: 'Jumbo', imagen: 'http://jumbocolombia.vteximg.com.br/arquivos/logo-jumbo.png' },
      { nombre: 'Zara', imagen: 'https://tiposdelogosylogotipos.files.wordpress.com/2012/05/logozara.jpg' },
      { nombre: 'Chevignon', imagen: 'http://www.chipichape.com.co/new/wp-content/uploads/2015/05/chevignon_logo.png' },
      { nombre: 'Americanino', imagen: 'http://solarogroup.com.co/wp-content/uploads/2015/06/americanino.jpg' },
      { nombre: 'Royal Films', imagen: 'http://beneficiosseguros.sura.com/Beneficios/038-RoyalFilms/images/logo.jpg' },
      { nombre: 'Totto', imagen: 'https://pbs.twimg.com/profile_images/661522489982455808/6o5U9ojv.png' },
      { nombre: 'Adidas', imagen: 'http://www.pngall.com/wp-content/uploads/2016/06/Adidas-Logo-PNG.png' },
      { nombre: 'Nike', imagen: 'http://puresavage.net/wp-content/uploads/2016/11/nike-feature-image.jpg' },
      { nombre: 'Le Coq Sportif', imagen: 'http://lecoqsportif.co.za/media/wysiwyg/le-coq-sportif-logo.png' },            
      { nombre: 'Electromillonaria', imagen: 'http://maderkit.com.co/archivos/contenido/puntos_de_venta/colombia/electromillonaria.png' },
    ];
  }
}

export class Almacen {
  nombre: string;
  imagen: string;
}


