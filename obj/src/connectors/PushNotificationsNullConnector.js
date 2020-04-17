"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushNotificationsNullConnector {
    send(correlationId, notification, callback) {
        if (callback)
            callback(null);
    }
    broadcast(correlationId, notification, callback) {
        if (callback)
            callback(null);
    }
}
exports.PushNotificationsNullConnector = PushNotificationsNullConnector;
//# sourceMappingURL=PushNotificationsNullConnector.js.map