"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const PushNotificationsServiceFactory_1 = require("../build/PushNotificationsServiceFactory");
class PushNotificationsLambdaFunction extends pip_services3_aws_node_1.CommandableLambdaFunction {
    constructor() {
        super("push_notifications", "Push notifications function");
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('pip-services-pushnotifications', 'controller', 'default', '*', '*'));
        this._factories.add(new PushNotificationsServiceFactory_1.PushNotificationsServiceFactory());
    }
}
exports.PushNotificationsLambdaFunction = PushNotificationsLambdaFunction;
exports.handler = new PushNotificationsLambdaFunction().getHandler();
//# sourceMappingURL=PushNotificationsLambdaFunction.js.map