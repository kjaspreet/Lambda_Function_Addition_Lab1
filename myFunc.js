'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    // console.log('value1 =', event.key1);
    // console.log('value2 =', event.key2);
    // console.log('value3 =', event.key3);
    var number1 = event.num1;
    var number2 = event.num2;
    var sum = number1 + number2;
    callback(null, 'Sum='+sum);  // Echo back the first key value
    //callback('Something went wrong');
};