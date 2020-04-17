import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { NotificationV1 } from '../data/version1/NotificationV1';
import { IPushNotificationsController } from './IPushNotificationsController';
export declare class PushNotificationsController implements IConfigurable, IReferenceable, ICommandable, IPushNotificationsController {
    private static _defaultConfig;
    private _dependencyResolver;
    private _connectors;
    private _commandSet;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getCommandSet(): CommandSet;
    send(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
    sendMany(correlationId: string, notifications: NotificationV1[], callback: (err: any) => void): void;
    broadcast(correlationId: string, notification: NotificationV1, callback: (err: any) => void): void;
    broadcastMany(correlationId: string, notifications: NotificationV1[], callback: (err: any) => void): void;
}
