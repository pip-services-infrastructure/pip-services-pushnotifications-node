import { CommandSet } from 'pip-services3-commons-node';
import { ICommand } from 'pip-services3-commons-node';
import { Command } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

import { NotificationV1 } from '../data/version1/NotificationV1';
import { NotificationV1Schema } from '../data/version1/NotificationV1Schema';
import { IPushNotificationsController } from './IPushNotificationsController';

export class PushNotificationsCommandSet extends CommandSet {
    private _logic: IPushNotificationsController;

    constructor(logic: IPushNotificationsController) {
        super();

        this._logic = logic;

        // Register commands to the database
		this.addCommand(this.makeSendCommand());
		this.addCommand(this.makeSendManyCommand());
		this.addCommand(this.makeBroadcastCommand());
		this.addCommand(this.makeBroadcastManyCommand());
    }

	private makeSendCommand(): ICommand {
		return new Command(
			"send",
			new ObjectSchema(true)
				.withRequiredProperty('notification', new NotificationV1Schema()),
			(correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
				let notification = args.get("notification");
				this._logic.send(correlationId, notification, (err) => {
                    callback(err, null);
                });
			}
		);
	}

	private makeSendManyCommand(): ICommand {
		return new Command(
			"send_many",
			new ObjectSchema(true)
				.withRequiredProperty('notifications', new ArraySchema(new NotificationV1Schema())),
			(correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
				let notifications = args.get("notifications");
				this._logic.sendMany(correlationId, notifications, (err) => {
                    callback(err, null);
                });
			}
		);
	}

	private makeBroadcastCommand(): ICommand {
		return new Command(
			"broadcast",
			new ObjectSchema(true)
				.withRequiredProperty('notification', new NotificationV1Schema()),
			(correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
				let notification = args.get("notification");
				this._logic.broadcast(correlationId, notification, (err) => {
                    callback(err, null);
                });
			}
		);
	}

	private makeBroadcastManyCommand(): ICommand {
		return new Command(
			"broadcast_many",
			new ObjectSchema(true)
				.withRequiredProperty('notifications', new ArraySchema(new NotificationV1Schema())),
			(correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
				let notifications = args.get("notifications");
				this._logic.broadcastMany(correlationId, notifications, (err) => {
                    callback(err, null);
                });
			}
		);
	}    
}