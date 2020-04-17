import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

export class NotificationV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withRequiredProperty('id', TypeCode.String);
        this.withRequiredProperty('type', TypeCode.String);
        this.withRequiredProperty('priority', TypeCode.Integer);
        this.withRequiredProperty('title', TypeCode.String);
        this.withOptionalProperty('description', TypeCode.String);
        this.withOptionalProperty('create_time', TypeCode.DateTime);
        this.withOptionalProperty('recipient_ids', new ArraySchema(TypeCode.String));
        this.withOptionalProperty('actions', new ArraySchema(TypeCode.String));
        this.withOptionalProperty('value', null);
    }
}
