import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';
export declare class PushNotificationsNullConnector implements IPushNotificationsConnector {
    send(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
    broadcast(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
}
