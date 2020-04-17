"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
class NotificationV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withRequiredProperty('id', pip_services3_commons_node_3.TypeCode.String);
        this.withRequiredProperty('type', pip_services3_commons_node_3.TypeCode.String);
        this.withRequiredProperty('priority', pip_services3_commons_node_3.TypeCode.Integer);
        this.withRequiredProperty('title', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('description', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('create_time', pip_services3_commons_node_3.TypeCode.DateTime);
        this.withOptionalProperty('recipient_ids', new pip_services3_commons_node_2.ArraySchema(pip_services3_commons_node_3.TypeCode.String));
        this.withOptionalProperty('actions', new pip_services3_commons_node_2.ArraySchema(pip_services3_commons_node_3.TypeCode.String));
        this.withOptionalProperty('value', null);
    }
}
exports.NotificationV1Schema = NotificationV1Schema;
//# sourceMappingURL=NotificationV1Schema.js.map