import { Injectable } from '@angular/core';
import { Userdetails } from './userdetails';
@Injectable()
export class SharedServiceService {
  
  public _name: string = '';
  public _age: number = 0;

  constructor() { 
    console.log('calling the shared service for the intiating.');
   }

  public setName = (name: string) => { this._name = name; }

  public setAge = (age: number) => { this._age = age }

  public setAll = (detail: Userdetails) => {
    this._name = detail._name;
    this._age = detail._age;
  }

  public getName = () => { return this._name }

  public getAge = () => { return this._age; }

}
