const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10){
        const char = expr.substring(i, i+10);

        if (char === '**********') {
            result += ' ';
            continue;
        }
        
        result += getChar(char);
    }

    return result;
}

function getChar(str) {
    let code = '';
    for (let i = 0; i < str.length; i += 2) {
        switch (`${str[i]}${str[i+1]}`) {
            case '10':
                code += '.'
                break;
            case '11':
                code += '-'
                break;
            default: 
                break;
        }
    }
    return MORSE_TABLE[code];
}

module.exports = {
    decode
}