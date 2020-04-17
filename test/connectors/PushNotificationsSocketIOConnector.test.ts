import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { NotificationV1 } from '../../src/data/version1/NotificationV1';
import { PushNotificationsSocketIOConnector } from '../../src/connectors/PushNotificationsSocketIOConnector';
import { PushNotificationsConnectorFixture } from './PushNotificationsConnectorFixture';

let restConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PushNotificationsSocketIOConnector', ()=> {
    let connector: PushNotificationsSocketIOConnector;
    let fixture: PushNotificationsConnectorFixture;

    suiteSetup((done) => {
        connector = new PushNotificationsSocketIOConnector();
        fixture = new PushNotificationsConnectorFixture(connector);

        connector.open(null, done);
    });
    
    suiteTeardown((done) => {
        connector.close(null, done);
    });
   
    test('Send Notification', (done) => {
        fixture.testSendNotification(done);
    });

    test('Broadcast Notification', (done) => {
        fixture.testBroadcastNotification(done);
    });

});