import { Injectable } from '@angular/core';
import { DatabaseConnection } from './database-connection';
import { Novedad } from '../../models/novedad';

@Injectable()
export class NovedadDao {

  constructor(public con: DatabaseConnection) { }

  createTable(): Promise<any> {
    const sql = "CREATE TABLE IF NOT EXISTS novedad (id VARCHAR PRIMARY KEY UNIQUE, nombre VARCHAR, almacen VARCHAR, imagen LONGTEXT, precio FLOAT, tipo VARCHAR, vigencia DATE)";
    return this.con.execute(sql, []);
  }

  insert(novedad: Novedad): Promise<string> {
    const sql = "INSERT INTO novedad (id, nombre, almacen, imagen, precio, tipo, vigencia) VALUES (?,?,?,?,?,?,?)";
    return this.con.execute(sql, [novedad.id, novedad.nombre, novedad.almacen, novedad.imagen, novedad.precio, novedad.tipo, novedad.vigencia]).then(result => {
      return Promise.resolve(result.insertId);
    });
  }

  update(novedad: Novedad): Promise<any> {
    const sql = "UPDATE novedad SET nombre = ?, almacen = ?, imagen = ?, precio = ?, tipo = ? vigencia = ? WHERE id = ?";
    return this.con.execute(sql, [novedad.nombre, novedad.almacen, novedad.imagen, novedad.precio, novedad.tipo, novedad.vigencia, novedad.id]);
  }

  delete(id: string): Promise<any> {
    const sql = "DELETE FROM novedad WHERE id = ?";
    return this.con.execute(sql, [id]);
  }

  getById(id: string): Promise<Novedad> {
    const sql = "SELECT * FROM novedad WHERE id = ?";
    return this.con.execute(sql, [id]).then(result => {
      let novedad: Novedad = null;

      if (result.rows.length > 0) {
        novedad = result.rows.item(0);
      }

      return Promise.resolve(novedad);
    });
  }

  all(): Promise<Novedad[]> {
    const sql = "SELECT * FROM novedad";
    return this.con.execute(sql, []).then(result => {
      let novedadades = [];
      for (let i = 0; i < result.rows.length; i++) {
        let novedad = result.rows.item(i);
        novedadades.push(novedad);
      }
      return Promise.resolve(novedadades);

    });

  }








}