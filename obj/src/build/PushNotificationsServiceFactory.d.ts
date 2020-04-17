import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';
export declare class PushNotificationsServiceFactory extends Factory {
    static Descriptor: Descriptor;
    static NullConnectorDescriptor: Descriptor;
    static SocketIOConnectorDescriptor: Descriptor;
    static ControllerDescriptor: Descriptor;
    static HttpServiceDescriptor: Descriptor;
    constructor();
}
