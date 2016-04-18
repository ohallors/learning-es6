/**
 * Created by c961723 on 15/04/2016.
 */
'use strict';
var message = 'I like JavaScript';

String.prototype.shout = function() {
    return this.toUpperCase();
}

console.log(message.shout());