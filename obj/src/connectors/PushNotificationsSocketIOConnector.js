"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushNotificationsSocketIOConnector {
    constructor() {
        this._opened = false;
    }
    isOpen() {
        return this._opened;
    }
    open(correlationId, callback) {
        this._opened = true;
        if (callback)
            callback(null);
    }
    close(correlationId, callback) {
        this._opened = false;
        if (callback)
            callback(null);
    }
    send(correlationId, notification, callback) {
        if (callback)
            callback(null);
    }
    broadcast(correlationId, notification, callback) {
        if (callback)
            callback(null);
    }
}
exports.PushNotificationsSocketIOConnector = PushNotificationsSocketIOConnector;
//# sourceMappingURL=PushNotificationsSocketIOConnector.js.map