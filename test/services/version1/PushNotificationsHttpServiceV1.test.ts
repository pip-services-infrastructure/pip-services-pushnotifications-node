let _ = require('lodash');
let async = require('async');
let restify = require('restify');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { NotificationV1 } from '../../../src/data/version1/NotificationV1';
import { NotificationPriorityV1 } from '../../../src/data/version1/NotificationPriorityV1';
import { PushNotificationsNullConnector } from '../../../src/connectors/PushNotificationsNullConnector';
import { PushNotificationsController } from '../../../src/logic/PushNotificationsController';
import { PushNotificationsHttpServiceV1 } from '../../../src/services/version1/PushNotificationsHttpServiceV1';

let restConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PushNotificationsHttpServiceV1', ()=> {
    let service: PushNotificationsHttpServiceV1;

    let rest: any;

    let NOTIFICATION1: NotificationV1 = {
        id: '1',
        type: 'test',
        priority: NotificationPriorityV1.High,
        title: 'Test Notification 1', 
        description: 'This is a test',
        recipient_ids: ['1', '2'],
        value: 'ABC',
        actions: ['ok']
    }
    let NOTIFICATION2: NotificationV1 = {
        id: '2',
        type: 'test',
        priority: NotificationPriorityV1.Medium,
        title: 'Test Notification 2', 
        description: 'This is a test',
        recipient_ids: ['3'],
        value: 'XYZ',
        actions: ['accept', 'reject']
    }

    suiteSetup((done) => {
        let connector = new PushNotificationsNullConnector();
        let controller = new PushNotificationsController();

        service = new PushNotificationsHttpServiceV1();
        service.configure(restConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-pushnotifications', 'connector', 'null', 'default', '1.0'), connector,
            new Descriptor('pip-services-pushnotifications', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-pushnotifications', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        service.open(null, done);
    });
    
    suiteTeardown((done) => {
        service.close(null, done);
    });

    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });

    test('Send Notification', (done) => {
        async.series([
        // Send one notification
            (callback) => {
                rest.post('/v1/push_notifications/send',
                    {
                        notification: NOTIFICATION1
                    },
                    (err, req, res) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Send two notifications
            (callback) => {
                rest.post('/v1/push_notifications/send_many',
                    {
                        notifications: [NOTIFICATION1, NOTIFICATION2]
                    },
                    (err, req, res) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            }
        ], done);
    });

    test('Broadcast Notification', (done) => {
        async.series([
        // Broadcast one notification
            (callback) => {
                rest.post('/v1/push_notifications/broadcast',
                    {
                        notification: NOTIFICATION1
                    },
                    (err, req, res) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Broadcast two notifications
            (callback) => {
                rest.post('/v1/push_notifications/broadcast_many',
                    {
                        notifications: [NOTIFICATION1, NOTIFICATION2]
                    },
                    (err, req, res) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            }
        ], done);
    });

});