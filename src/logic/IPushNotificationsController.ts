import { NotificationV1 } from '../data/version1/NotificationV1';

export interface IPushNotificationsController {
    send(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void;

    sendMany(correlationId: string, notifications: NotificationV1[], 
        callback: (err: any) => void): void;
    
    broadcast(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void;

    broadcastMany(correlationId: string, notifications: NotificationV1[], 
        callback: (err: any) => void): void;
}
