import { Descriptor } from 'pip-services3-commons-node';
import { CommandableLambdaFunction } from 'pip-services3-aws-node';
import { PushNotificationsServiceFactory } from '../build/PushNotificationsServiceFactory';

export class PushNotificationsLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("push_notifications", "Push notifications function");
        this._dependencyResolver.put('controller', new Descriptor('pip-services-pushnotifications', 'controller', 'default', '*', '*'));
        this._factories.add(new PushNotificationsServiceFactory());
    }
}

export const handler = new PushNotificationsLambdaFunction().getHandler();