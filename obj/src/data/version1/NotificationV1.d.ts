import { IStringIdentifiable } from 'pip-services3-commons-node';
export declare class NotificationV1 implements IStringIdentifiable {
    id: string;
    type: string;
    priority: number;
    title: string;
    description?: string;
    create_time?: Date;
    recipient_ids?: string[];
    actions?: string[];
    value?: any;
}
