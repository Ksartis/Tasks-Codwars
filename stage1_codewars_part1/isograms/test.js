function isogram(str) {
    str = str.toLowerCase();
    let i
    let j 
    for ((i = 0); i < str.lenght; i++ ) {
        for ( (j = i+1); j < str.lenght; ++j) {
            if (str[i] === str[j]) {
                return false
            } 
        }   
    }
    return true
}

console.log( isogram('abcd') );


