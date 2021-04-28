import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clearAll() {
    this.messages = [];
  }

  clearSingle(index: number) {
    this.messages = this.messages.filter((val, i ) => i != index);
  }
}
