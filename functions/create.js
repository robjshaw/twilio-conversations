exports.handler = function(context, event, callback) {

    const twilioClient = context.getTwilioClient();

    twilioClient.conversations.conversations
      .create({
         messagingServiceSid: process.env.MSSID,
         friendlyName: event.title
       },
       function(err, result){

            var response = {};

            response.id = result.sid;
            response.title = event.title;

            response.load = result;

            callback(null, response);
       });
}