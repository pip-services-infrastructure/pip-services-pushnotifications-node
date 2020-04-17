import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';

import { PushNotificationsServiceFactory } from '../build/PushNotificationsServiceFactory';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';

export class PushNotificationsProcess extends ProcessContainer {

    public constructor() {
        super("push_notifications", "Push notifications microservice");
        this._factories.add(new PushNotificationsServiceFactory);
        this._factories.add(new DefaultRpcFactory);
    }

}
