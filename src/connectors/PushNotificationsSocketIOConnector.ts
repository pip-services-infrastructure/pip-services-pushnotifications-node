import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsConnector } from './IPushNotificationsConnector';
import { IOpenable } from 'pip-services3-commons-node';

export class PushNotificationsSocketIOConnector
    implements IPushNotificationsConnector, IOpenable {
    private _opened: boolean = false;

    public isOpen(): boolean {
        return this._opened;
    }

    public open(correlationId: string, callback: (err) => void): void {
        this._opened = true;
        if (callback) callback(null);
    }

    public close(correlationId: string, callback: (err) => void): void {
        this._opened = false;
        if (callback) callback(null);
    }

    public send(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }

    public broadcast(correlationId: string, notification: NotificationV1, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
}
