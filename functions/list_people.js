exports.handler = function(context, event, callback) {

    const twilioClient = context.getTwilioClient();

    twilioClient.conversations.conversations(event.conv_id)
      .participants
      .list({limit: 20},
        function(err, result){
                var response = {};

                response = result;

                callback(null, response);
        });

}