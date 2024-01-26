export default function (Blockly) {
    // arduinoNano
    Blockly.Arduino['arduino_pin_setPinTrigger'] = function (block) {
        var arg0 = block.getFieldValue('PIN') || '0';
        Blockly.Arduino.definitions_['definitions_ultrasonic_setTrigger' + arg0] =
            '#define PIN_TRIGGER         ' + arg0 + '   // TRIGGER PIN';
        var code = '';
        return code;
    };

    Blockly.Arduino['arduino_pin_setPinEcho'] = function (block) {
        var arg0 = block.getFieldValue('PIN') || '0';
        Blockly.Arduino.definitions_['definitions_ultrasonic_setEcho' + arg0] =
            '#define PIN_ECHO            ' + arg0 + '   // ECHO PIN';
        var code = '';
        return code;
    };

    Blockly.Arduino['arduino_pin_getDistance'] = function (block) {
        Blockly.Arduino.customFunctions_['definitions_pin_getDistance'] =
            '#include <Ultrasonic.h>\n' +
            'Ultrasonic ultrasonic(PIN_TRIGGER, PIN_ECHO);\n' +
            'int distance;';

        var code = 'distance = ultrasonic.read();\n';
        return code;
    };

    Blockly.Arduino['arduino_pin_readDistance'] = function (block) {
        var code = 'distance';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
}

