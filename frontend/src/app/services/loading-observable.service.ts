import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingObservableService {

loading$ = new EventEmitter();
load$ = new EventEmitter()
estado$ =  new EventEmitter()

  constructor() {
  } }
