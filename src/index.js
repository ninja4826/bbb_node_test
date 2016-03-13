import b from 'bonescript';

var ledOn = false;

var blinkInterval = setInterval(() => {
    b.digitalWrite(b.USR3, !ledOn);
    ledOn = !ledOn;
}, 1000);
