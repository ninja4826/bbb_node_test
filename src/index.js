import b from 'octalbonescript';

var ledOn = 0;
var blinkInterval;
var pin = 'USR3';

b.pinMode(pin, b.OUTPUT, (err1) => {
    if (err1) {
        console.error(err1.message);
        return;
    }
    blinkInterval = setInterval(() => {
        ledOn = ledOn ? 0 : 1;
        b.digitalWrite(pin, b.HIGH, (err2) => {
            if (err2) {
                console.error(err2.message);
                return;
            }
        });
    });
});
