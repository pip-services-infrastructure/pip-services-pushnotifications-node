import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class PushNotificationsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/push_notifications');
        this._dependencyResolver.put('controller', new Descriptor('pip-services-pushnotifications', 'controller', 'default', '*', '1.0'));
    }
}