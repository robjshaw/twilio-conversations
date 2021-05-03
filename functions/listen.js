exports.handler = function(context, event, callback) {

    const MonkeyLearn = require('monkeylearn');

    var response = {};

    if (event.Body.includes('Hi') == true){

        twilioClient.messages
        .create({
            body: 'you sent a phonenumber',
            messagingServiceSid: process.env.MSSID,
            to: event.Author
        },
        function(err, result){
            var response = {};

            response = result;

            callback(null, response);
        });

    }else{

        const ml = new MonkeyLearn(process.env.MLKEY)
        let model_id = process.env.MLMODEL
        let data = [event.Body]
        ml.classifiers.classify(model_id, data).then(res => {
            console.log(res.body)
        })

        

    }
}