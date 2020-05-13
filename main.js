function adfgvx(input, keyMsg){  
    input = input.replace(/,/g, '')
    keyMsg = keyMsg.replace(/,/g, '')
    input = input.toUpperCase()
    keyMsg = keyMsg.toUpperCase()
    function shuffle(arra1) {
        var ctr = arra1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    function transpose(a) {
        return Object.keys(a[0]).map(function(c) {
            return a.map(function(r) { return r[c]; });
        });
    }
    var alphanumeric = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    var table = new Array('A', 'D', 'F', 'G', 'V', 'X')
    shuffle(alphanumeric) // random polybus square
    var polybusinit = []
    while(alphanumeric.length) polybusinit.push(alphanumeric.splice(0,6)) // makes polybus array into a 2d 6x6 matrix
    console.log(polybusinit)
    pnum = 11
    message = input
    keyword1 = keyMsg
    let keyword = [...keyword1];
    j = 0
    ciphertext1 = []
    ciphertext2 = []
    for(j=0; j < message.length; j++){
        for(i=0; i < polybusinit.length; i++){
            for(k=0; k < 6; k++){     
                if(message.charAt(j) == polybusinit[i][k]){
                    ciphertext1.push(table[i])
                    ciphertext1.push(table[k])
                }
            }
        }
    }
    // console.log(ciphertext1)
    while(ciphertext1.length) ciphertext2.push(ciphertext1.splice(0,keyword.length))
    ciphertext2.unshift(keyword)
    ciphertext3 = transpose(ciphertext2)
    ciphertext3.sort()
    ciphertext4 = transpose(ciphertext3)
    ciphertext4.shift()
    ciphertext4 = ciphertext4.join()
    ciphertext4 = ciphertext4.replace(/,/g, '');
    console.log(ciphertext4)
}
