"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const PushNotificationsCommandSet_1 = require("./PushNotificationsCommandSet");
class PushNotificationsController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_node_2.DependencyResolver(PushNotificationsController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._connectors = this._dependencyResolver.getOptional('connector');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new PushNotificationsCommandSet_1.PushNotificationsCommandSet(this);
        return this._commandSet;
    }
    send(correlationId, notification, callback) {
        if (notification == null) {
            if (callback)
                callback(null);
            return;
        }
        async.each(this._connectors, (connector, callback) => {
            connector.send(correlationId, notification, callback);
        }, callback);
    }
    sendMany(correlationId, notifications, callback) {
        if (notifications == null || notifications.length == 0) {
            if (callback)
                callback(null);
            return;
        }
        async.each(this._connectors, (connector, callback) => {
            async.each(notifications, (notification, callback) => {
                connector.send(correlationId, notification, callback);
            }, callback);
        }, callback);
    }
    broadcast(correlationId, notification, callback) {
        if (notification == null) {
            if (callback)
                callback(null);
            return;
        }
        async.each(this._connectors, (connector, callback) => {
            connector.broadcast(correlationId, notification, callback);
        }, callback);
    }
    broadcastMany(correlationId, notifications, callback) {
        if (notifications == null || notifications.length == 0) {
            if (callback)
                callback(null);
            return;
        }
        async.each(this._connectors, (connector, callback) => {
            async.each(notifications, (notification, callback) => {
                connector.broadcast(correlationId, notification, callback);
            }, callback);
        }, callback);
    }
}
exports.PushNotificationsController = PushNotificationsController;
PushNotificationsController._defaultConfig = pip_services3_commons_node_1.ConfigParams.fromTuples('dependencies.connector', 'pip-services-pushnotifications:connector:*:*:1.0');
//# sourceMappingURL=PushNotificationsController.js.map