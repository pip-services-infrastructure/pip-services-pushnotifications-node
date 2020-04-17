let PushNotificationsLambdaFunction = require('../obj/src/container/PushNotificationsLambdaFunction').PushNotificationsLambdaFunction;

module.exports = new PushNotificationsLambdaFunction().getHandler();