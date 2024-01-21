export default function (Blockly) {
    Blockly.Arduino['arduino_pin_getServoOutput'] = function (block) {
        var arg0 = block.getFieldValue('PIN') || 'A1';
        var arg1 = Blockly.Arduino.valueToCode(block, 'OUT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;

        Blockly.Arduino.includes_['include_servo'] = '#include <Servo.h>';
        Blockly.Arduino.definitions_['definitions_servo' + arg0] = 'Servo servo_' + arg0 + ';';
        Blockly.Arduino.setups_['setups_servo' + arg0] = 'servo_' + arg0 + '.attach' + '(' + arg0 + ');';

        var code = 'servo_' + arg0 + '.write' + '(' + arg1 + ');\n';
        return code;
    };
}

