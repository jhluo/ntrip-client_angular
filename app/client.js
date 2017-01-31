"use strict";
var Client = (function () {
    function Client(host, port, mountPt, user, password) {
        this.host = host;
        this.port = port;
        this.mountPt = mountPt;
        this.user = user;
        this.password = password;
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map