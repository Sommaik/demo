import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatServiceService]
})
export class ChatComponent implements OnInit {
  message;
  messageData=[];
  constructor(
    private chatService:ChatServiceService
  ) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe((message)=>{
      this.messageData.push(message);
    });
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
  }

}
