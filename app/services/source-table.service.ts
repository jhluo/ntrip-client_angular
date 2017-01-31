import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';

const CHAT_URL = "";

export interface Message {
	message: string,
}

@Injectable()
export class ChatService {
	public messages: Subject<Message>;

	constructor(wsService: WebSocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				return {
					message: data.message
				}
			});
	}
} // end class ChatService