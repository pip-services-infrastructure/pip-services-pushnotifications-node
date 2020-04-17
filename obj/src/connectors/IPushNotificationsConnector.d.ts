import { NotificationV1 } from '../data/version1/NotificationV1';
export interface IPushNotificationsConnector {
    send(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
    broadcast(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
}
