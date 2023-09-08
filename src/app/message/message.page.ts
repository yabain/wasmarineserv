
import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage {
  // currentDate:string;
  message:string;
  constructor(private messageService:MessageService) {

        }
        sendMessage():void{
          if(this.message){
            this.messageService.sendMessage(this.message);
            this.message=''
          }
        }
        get messages(): string[] {
          return this.messageService.getMessages();
        }
      }