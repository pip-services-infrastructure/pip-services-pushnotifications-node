let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { NotificationV1 } from '../../src/data/version1/NotificationV1';
import { NotificationPriorityV1 } from '../../src/data/version1/NotificationPriorityV1';
import { PushNotificationsNullConnector } from '../../src/connectors/PushNotificationsNullConnector';
import { PushNotificationsController } from '../../src/logic/PushNotificationsController';

suite('PushNotificationsController', ()=> {
    let controller: PushNotificationsController;

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
        controller = new PushNotificationsController();
        let connector = new PushNotificationsNullConnector();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-pushnotifications', 'connector', 'null', 'default', '1.0'), connector,
            new Descriptor('pip-services-pushnotifications', 'controller', 'default', 'default', '1.0'), controller
        );
        controller.setReferences(references);

        done();
    });
   
    test('Send Notification', (done) => {
        async.series([
        // Send one notification
            (callback) => {
                controller.send(null, NOTIFICATION1, (err) => {
                    assert.isNull(err);

                    callback();
                });
            },
        // Send two notifications
            (callback) => {
                controller.sendMany(null, [NOTIFICATION1, NOTIFICATION2], (err) => {
                    assert.isNull(err);

                    callback();
                });
            }
        ], done);
    });

    test('Broadcast Notification', (done) => {
        async.series([
        // Broadcast one notification
            (callback) => {
                controller.broadcast(null, NOTIFICATION1, (err) => {
                    assert.isNull(err);

                    callback();
                });
            },
        // Broadcast two notifications
            (callback) => {
                controller.broadcastMany(null, [NOTIFICATION1, NOTIFICATION2], (err) => {
                    assert.isNull(err);

                    callback();
                });
            }
        ], done);
    });

});