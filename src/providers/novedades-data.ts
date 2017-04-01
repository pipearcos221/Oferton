import { Injectable } from '@angular/core';

@Injectable()
export class NovedadesData {

  data: Novedad[]

  constructor() {
    this.loadData()
  }

  loadData() {
    this.data = [
      { nombre: 'Guayos Nike', imagen: 'https://cazaofertas.com.co/wp-content/uploads/2016/03/oferta-511.jpg' },
      { nombre: 'Bono de descuento Zara', imagen: 'http://blogdecharhadas.blogs.charhadas.com/documents/1877067/5054973/rotador-zara.jpg' },
      { nombre: 'Noche Loca Chevignon ', imagen: 'http://modayropaonline.com/wp-content/uploads/2013/11/chevignon.jpg' },
      { nombre: 'Reduce Reusa Recicla con Americanino', imagen: 'http://www.pizca.cl/wp-content/uploads/2013/04/recicla_02.jpg' },
      { nombre: '2x1 Sandwich Qbano', imagen: 'http://static03.ofertia.com.co/catalogos/93070322-a237-407c-8fa4-c1c2d4c89c9b/0/normal.v1.jpg' },
      { nombre: 'Presto para dos personas', imagen: 'http://presto.com.co/images/donde_ubicar_codigo.jpg' },
      { nombre: 'Olimpo Smart TV', imagen: 'https://d23bz46gcf45kh.cloudfront.net/files/items/promociones-olimpica-televisor-led-olimpo-40-smart-tv_0039061127.jpg' },
      { nombre: 'Adidas Nitrocharge', imagen: 'http://descuentazos.pe/wp-content/uploads/2014/04/Zapatillas-Adidas-Nitrocharge-3.0-TRX.jpg' },
      { nombre: 'Consola Xbox', imagen: 'https://d23bz46gcf45kh.cloudfront.net/files/items/item_c17057_i1_Promociones-Cyberlunes-Exito-Xbox-360-Kinect-Juegos.JPG' },
      { nombre: 'Promomania RoyalFilms', imagen: 'http://4.bp.blogspot.com/-WvgXOQ-1nlM/VS-yMVaiYfI/AAAAAAAAHPc/94UhWuuiOJc/s1600/ROYAL%2BFILMS.jpg' },
      { nombre: 'totto Loco', imagen: 'http://totto.vteximg.com.br/arquivos/terminos_tottoloco_2015_250x250.jpg' },
    ];
  }

}

export class Novedad {
  nombre: string;
  imagen: string;
}