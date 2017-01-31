"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var websocket_service_1 = require("./websocket.service");
var CHAT_URL = "";
var ChatService = (function () {
    function ChatService(wsService) {
        this.messages = wsService
            .connect(CHAT_URL)
            .map(function (response) {
            var data = JSON.parse(response.data);
            return {
                message: data.message
            };
        });
    }
    return ChatService;
}()); // end class ChatService
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [websocket_service_1.WebSocketService])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=ntrip-client.service.js.map