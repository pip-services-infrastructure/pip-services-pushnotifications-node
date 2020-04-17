"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const PushNotificationsServiceFactory_1 = require("../build/PushNotificationsServiceFactory");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PushNotificationsProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("push_notifications", "Push notifications microservice");
        this._factories.add(new PushNotificationsServiceFactory_1.PushNotificationsServiceFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
    }
}
exports.PushNotificationsProcess = PushNotificationsProcess;
//# sourceMappingURL=PushNotificationsProcess.js.map