function sort(string) {
    var words = string.split(" ").filter(v => v !== '');  // из одной строки с пробелами получаем массив строк
    var i = 0;

    return words = words.map( v => {
        v = v.toLowerCase().split("").sort(compareLetter).join("");
        v = v[0].toUpperCase() + v.substring(1, v.length);
        return v;
    }).sort(compareWord).join(" ");
    
}

function checkYo(a, b) {    // проверка буквы ё
    if (a.charCodeAt(0) === 1105) {
        return b.charCodeAt(0) <= 1077 ? 1: -1;
    }
    if (b.charCodeAt(0) === 1105) {
        return a.charCodeAt(0) <= 1077 ? -1: 1;
    }

    if (a.charCodeAt(0) === 1025) {
        return b.charCodeAt(0) <= 1045 ? 1: -1;
    }
    if (b.charCodeAt(0) === 1025) {
        return a.charCodeAt(0) <= 1045 ? -1: 1;
    }
}

function compareLetter(a, b) {
    var isYo;
    if ( ( isYo = checkYo(a, b) ) !== undefined )
        return isYo;
    return ( a.charCodeAt(0) - b.charCodeAt(0) );

}

function compareWord(a, b) {
    var isYo;
    if ( ( isYo = checkYo(a, b)) !== undefined )
        return isYo;
    return (a > b);
}
