import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';

export class PushNotificationsNullConnector implements IPushNotificationsConnector {
    public send(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public broadcast(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
}
