import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseConnection {

  db:SQLiteObject;

  constructor() {}

  openConnection():Promise<SQLiteObject>{
    const sqlite =  new SQLite(); 
    return sqlite.create({
      name: 'oferton.db',
      location: 'default'
    }).then(db =>{
      this.db = db;
      return Promise.resolve(db);
    });
  }

  execute(sql:string, params:any[]):Promise<any>{
    if(this.db){
      return this.db.executeSql(sql, params);
    }
  }

}