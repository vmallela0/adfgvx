let map = new Map()
map.set('A','.-') 
map.set('B','-...')
map.set('C','-.-.')
map.set('D','-..')
map.set('E','.')
map.set('F','..-.')
map.set('G','--.')
map.set('H','....')
map.set('I','..')
map.set('J','.---')
map.set('K','-.-')
map.set('L','.-..')
map.set('M','--')
map.set('N','-.')
map.set('O','---')
map.set('P','.--.')
map.set('Q','--.-')
map.set('R','.-.')
map.set('S','...')
map.set('T','-')
map.set('U','..-')
map.set('V','...-')
map.set('W','.--')
map.set('X','-..-')
map.set('Y','-.--')
map.set('Z','--..')


function morseTranslate(message){
    message = message.toUpperCase()
    morse = []
    for(i=0;i<message.length;i++){
        morse.push(map.get(message[i]))
    }
    morse = morse.join(' ', '')
    
    return morse
}
console.log(morseTranslate("randomzulu"))