let PushNotificationsProcess = require('../obj/src/container/PushNotificationsProcess').PushNotificationsProcess;

try {
    new PushNotificationsProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
