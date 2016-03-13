import b from 'bonescript';

var ledOn = 0;

b.pinMode(b.USR3, 'out');

var blinkInterval = setInterval(() => {
    ledOn = ledOn ? 0 : 1;
    b.digitalWrite(b.USR3, ledOn);
}, 1000);
