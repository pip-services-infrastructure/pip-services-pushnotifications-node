"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const NotificationV1Schema_1 = require("../data/version1/NotificationV1Schema");
class PushNotificationsCommandSet extends pip_services3_commons_node_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeSendCommand());
        this.addCommand(this.makeSendManyCommand());
        this.addCommand(this.makeBroadcastCommand());
        this.addCommand(this.makeBroadcastManyCommand());
    }
    makeSendCommand() {
        return new pip_services3_commons_node_2.Command("send", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('notification', new NotificationV1Schema_1.NotificationV1Schema()), (correlationId, args, callback) => {
            let notification = args.get("notification");
            this._logic.send(correlationId, notification, (err) => {
                callback(err, null);
            });
        });
    }
    makeSendManyCommand() {
        return new pip_services3_commons_node_2.Command("send_many", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('notifications', new pip_services3_commons_node_4.ArraySchema(new NotificationV1Schema_1.NotificationV1Schema())), (correlationId, args, callback) => {
            let notifications = args.get("notifications");
            this._logic.sendMany(correlationId, notifications, (err) => {
                callback(err, null);
            });
        });
    }
    makeBroadcastCommand() {
        return new pip_services3_commons_node_2.Command("broadcast", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('notification', new NotificationV1Schema_1.NotificationV1Schema()), (correlationId, args, callback) => {
            let notification = args.get("notification");
            this._logic.broadcast(correlationId, notification, (err) => {
                callback(err, null);
            });
        });
    }
    makeBroadcastManyCommand() {
        return new pip_services3_commons_node_2.Command("broadcast_many", new pip_services3_commons_node_3.ObjectSchema(true)
            .withRequiredProperty('notifications', new pip_services3_commons_node_4.ArraySchema(new NotificationV1Schema_1.NotificationV1Schema())), (correlationId, args, callback) => {
            let notifications = args.get("notifications");
            this._logic.broadcastMany(correlationId, notifications, (err) => {
                callback(err, null);
            });
        });
    }
}
exports.PushNotificationsCommandSet = PushNotificationsCommandSet;
//# sourceMappingURL=PushNotificationsCommandSet.js.map