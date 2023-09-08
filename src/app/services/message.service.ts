import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
username:string;
messages:string[] = []

  constructor() { }
  sendMessage(message: string): void {
    this.messages.push(`[${this.username}]: ${message}`);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
