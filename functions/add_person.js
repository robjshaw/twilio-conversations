exports.handler = function(context, event, callback) {

    const twilioClient = context.getTwilioClient();

    twilioClient.conversations.conversations(event.conv_id).participants.create({
        'messagingBinding.address': event.person,
        'messagingBinding.proxyAddress': process.env.PHONENUMBER
    },
       function(err, result){

            console.log(err);
            console.log(process.env.PHONENUMBER);

            var response = {};

            response.load = result;

            twilioClient.messages
            .create({
                body: 'welcome to the team',
                messagingServiceSid: process.env.MSSID,
                to: event.person
            },
            function(err, result){
                callback(null, response);
            });

       });
}