"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const PushNotificationsNullConnector_1 = require("../connectors/PushNotificationsNullConnector");
const PushNotificationsSocketIOConnector_1 = require("../connectors/PushNotificationsSocketIOConnector");
const PushNotificationsController_1 = require("../logic/PushNotificationsController");
const PushNotificationsHttpServiceV1_1 = require("../services/version1/PushNotificationsHttpServiceV1");
class PushNotificationsServiceFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(PushNotificationsServiceFactory.NullConnectorDescriptor, PushNotificationsNullConnector_1.PushNotificationsNullConnector);
        this.registerAsType(PushNotificationsServiceFactory.SocketIOConnectorDescriptor, PushNotificationsSocketIOConnector_1.PushNotificationsSocketIOConnector);
        this.registerAsType(PushNotificationsServiceFactory.ControllerDescriptor, PushNotificationsController_1.PushNotificationsController);
        this.registerAsType(PushNotificationsServiceFactory.HttpServiceDescriptor, PushNotificationsHttpServiceV1_1.PushNotificationsHttpServiceV1);
    }
}
exports.PushNotificationsServiceFactory = PushNotificationsServiceFactory;
PushNotificationsServiceFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services-PushNotifications", "factory", "default", "default", "1.0");
PushNotificationsServiceFactory.NullConnectorDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-pushnotifications", "connector", "null", "*", "1.0");
PushNotificationsServiceFactory.SocketIOConnectorDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-pushnotifications", "connector", "socketio", "*", "1.0");
PushNotificationsServiceFactory.ControllerDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-pushnotifications", "controller", "default", "*", "1.0");
PushNotificationsServiceFactory.HttpServiceDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services-pushnotifications", "service", "http", "*", "1.0");
//# sourceMappingURL=PushNotificationsServiceFactory.js.map