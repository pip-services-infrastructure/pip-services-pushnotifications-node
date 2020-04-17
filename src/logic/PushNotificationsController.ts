let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { DependencyResolver } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';

import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from '../connectors/IPushNotificationsConnector';
import { IPushNotificationsController } from './IPushNotificationsController';
import { PushNotificationsCommandSet } from './PushNotificationsCommandSet';

export class PushNotificationsController implements IConfigurable, IReferenceable, ICommandable, IPushNotificationsController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.connector', 'pip-services-pushnotifications:connector:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(PushNotificationsController._defaultConfig);
    private _connectors: IPushNotificationsConnector[];
    private _commandSet: PushNotificationsCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._connectors = this._dependencyResolver.getOptional<IPushNotificationsConnector>('connector');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new PushNotificationsCommandSet(this);
        return this._commandSet;
    }

    public send(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void {

        if (notification == null) {
            if (callback) callback(null);
            return;
        }
    
        async.each(this._connectors, (connector, callback) => {
            connector.send(correlationId, notification, callback);
        }, callback);
    }

    public sendMany(correlationId: string, notifications: NotificationV1[], 
        callback: (err: any) => void): void {

        if (notifications == null || notifications.length == 0) {
            if (callback) callback(null);
            return;
        }

        async.each(this._connectors, (connector, callback) => {
            async.each(notifications, (notification, callback) => {
                connector.send(correlationId, notification, callback);
            }, callback);
        }, callback);
    }
    
    public broadcast(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void {
        if (notification == null) {
            if (callback) callback(null);
            return;
        }
    
        async.each(this._connectors, (connector, callback) => {
            connector.broadcast(correlationId, notification, callback);
        }, callback);
    }

    public broadcastMany(correlationId: string, notifications: NotificationV1[], 
        callback: (err: any) => void): void {
        if (notifications == null || notifications.length == 0) {
            if (callback) callback(null);
            return;
        }

        async.each(this._connectors, (connector, callback) => {
            async.each(notifications, (notification, callback) => {
                connector.broadcast(correlationId, notification, callback);
            }, callback);
        }, callback);
    }
        
}
