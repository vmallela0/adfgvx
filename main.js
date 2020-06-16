function shuffle(arra1) { // makes the polybius square random
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
function toString(array){
    for(j=0;j<6;j++){
        for(i=0; i < 6; i++){
            document.getElementById("polybius").innerHTML += array[i][j] +"\t" + "\t" // printing the polybius matrix like a matrix in the html
        }
        document.getElementById("polybius").innerHTML += "<br>"
    }
}
function transpose(a) { // used for transposing the matrix later on in the calculations
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}
function polybius(){
    var alphanumeric = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    var table = new Array('A', 'D', 'F', 'G', 'V', 'X')
    shuffle(alphanumeric) // random polybius square
    var polybiusinit = [] // The alphanumeric polybius square
    while(alphanumeric.length) polybiusinit.push(alphanumeric.splice(0,6)) // makes polybius array into a 2d 6x6 matrix
    return polybius;
}
function adfgvx(input){  
    document.getElementById("polybius").innerHTML = ""
    var input = document.getElementById('message').value
    input = input.toUpperCase()
    var key = document.getElementById('key').value
    key = key.toUpperCase()
    var alphanumeric = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    var table = new Array('A', 'D', 'F', 'G', 'V', 'X')
    shuffle(alphanumeric) // random polybius square
    var polybiusinit = []
    while(alphanumeric.length) polybiusinit.push(alphanumeric.splice(0,6)) // makes polybius array into a 2d 6x6 matrix
    pnum = 11
    message = input
    keyword1 = key
    // keyword1 = "RUSSIAN"
    let keyword = [...keyword1]; // the keyword which realigns the matrices for the adfgvx function. 
    j = 0
    ciphertext1 = []
    ciphertext2 = []
    for(j=0; j < message.length; j++){
        for(i=0; i < polybiusinit.length; i++){
            for(k=0; k < 6; k++){     
                if(message.charAt(j) == polybiusinit[i][k]){
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
    finalT = []
    finalT.push(polybiusinit)
    finalT.unshift(ciphertext4)
    console.log(finalT[0])
    document.getElementById("cipher").innerHTML= finalT[0] 
    document.getElementById("morse").innerHTML= morseTranslate(finalT[0]) 


    toString(polybiusinit);
}
//console.log(adfgvx("Hello", "Key")) // testing with message/key parameters

