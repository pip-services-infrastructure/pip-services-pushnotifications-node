let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IPushNotificationsConnector } from "../../src/connectors/IPushNotificationsConnector";
import { NotificationV1 } from "../../src/data/version1/NotificationV1";
import { NotificationPriorityV1 } from "../../src/data/version1/NotificationPriorityV1";

export class PushNotificationsConnectorFixture {
    private _connector: IPushNotificationsConnector;

    private NOTIFICATION1: NotificationV1 = {
        id: '1',
        type: 'test',
        priority: NotificationPriorityV1.High,
        title: 'Test Notification 1', 
        description: 'This is a test',
        recipient_ids: ['1', '2'],
        value: 'ABC',
        actions: ['ok']
    }
    private NOTIFICATION2: NotificationV1 = {
        id: '2',
        type: 'test',
        priority: NotificationPriorityV1.Medium,
        title: 'Test Notification 2', 
        description: 'This is a test',
        recipient_ids: ['3'],
        value: 'XYZ',
        actions: ['accept', 'reject']
    }

    public constructor(connector: IPushNotificationsConnector) {
        this._connector = connector;
    }

    public testSendNotification(callback: (err) => void): void {
        this._connector.send(null, this.NOTIFICATION1, callback);
    }

    public testBroadcastNotification(callback: (err) => void): void {
        this._connector.broadcast(null, this.NOTIFICATION2, callback);
    }
}