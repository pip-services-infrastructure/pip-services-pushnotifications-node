import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { PushNotificationsNullConnector } from '../connectors/PushNotificationsNullConnector';
import { PushNotificationsSocketIOConnector } from '../connectors/PushNotificationsSocketIOConnector';
import { PushNotificationsController } from '../logic/PushNotificationsController';
import { PushNotificationsHttpServiceV1 } from '../services/version1/PushNotificationsHttpServiceV1';

export class PushNotificationsServiceFactory extends Factory {
	public static Descriptor = new Descriptor("pip-services-PushNotifications", "factory", "default", "default", "1.0");
	public static NullConnectorDescriptor = new Descriptor("pip-services-pushnotifications", "connector", "null", "*", "1.0");
	public static SocketIOConnectorDescriptor = new Descriptor("pip-services-pushnotifications", "connector", "socketio", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("pip-services-pushnotifications", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("pip-services-pushnotifications", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(PushNotificationsServiceFactory.NullConnectorDescriptor, PushNotificationsNullConnector);
		this.registerAsType(PushNotificationsServiceFactory.SocketIOConnectorDescriptor, PushNotificationsSocketIOConnector);
		this.registerAsType(PushNotificationsServiceFactory.ControllerDescriptor, PushNotificationsController);
		this.registerAsType(PushNotificationsServiceFactory.HttpServiceDescriptor, PushNotificationsHttpServiceV1);
	}
	
}
