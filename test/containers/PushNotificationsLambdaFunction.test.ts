let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { NotificationV1 } from '../../src/data/version1/NotificationV1';
import { NotificationPriorityV1 } from '../../src/data/version1/NotificationPriorityV1';
import { PushNotificationsLambdaFunction } from '../../src/container/PushNotificationsLambdaFunction';

suite('PushNotificationsLambdaFunction', ()=> {
    let lambda: PushNotificationsLambdaFunction;

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
        let config = ConfigParams.fromTuples(
            'logger.descriptor', 'pip-services:logger:console:default:1.0',
            'connector.descriptor', 'pip-services-pushnotifications:connector:null:default:1.0',
            'controller.descriptor', 'pip-services-pushnotifications:controller:default:default:1.0'
        );

        lambda = new PushNotificationsLambdaFunction();
        lambda.configure(config);
        lambda.open(null, done);
    });
    
    suiteTeardown((done) => {
        lambda.close(null, done);
    });
    
    test('Send Notification', (done) => {
        async.series([
        // Send one notification
            (callback) => {
                lambda.act(
                    {
                        role: 'push_notifications',
                        cmd: 'send',
                        notification: NOTIFICATION1
                    },
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Send two notifications
            (callback) => {
                lambda.act(
                    {
                        role: 'push_notifications',
                        cmd: 'send_many',
                        notifications: [NOTIFICATION1, NOTIFICATION2]
                    },
                    (err) => {
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
                lambda.act(
                    {
                        role: 'push_notifications',
                        cmd: 'broadcast',
                        notification: NOTIFICATION1
                    },
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Broadcast two notifications
            (callback) => {
                lambda.act(
                    {
                        role: 'push_notifications',
                        cmd: 'broadcast_many',
                        notifications: [NOTIFICATION1, NOTIFICATION2]
                    },
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            }
        ], done);
    });

});