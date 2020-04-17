import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';
import { IOpenable } from 'pip-services3-commons-node';
export declare class PushNotificationsSocketIOConnector implements IPushNotificationsConnector, IOpenable {
    private _opened;
    isOpen(): boolean;
    open(correlationId: string, callback: (err: any) => void): void;
    close(correlationId: string, callback: (err: any) => void): void;
    send(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
    broadcast(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
}
