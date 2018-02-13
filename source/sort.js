function sort(string) {
    var words = string.split(" ");  // из одной строки с пробелами получаем массив строк
    var i = 0;

    while (i < words.length) {  // удаляем пробелы из массива
        if (words[i] === '')
            words.splice(i, 1);
        else
            i++;
    }

    for (i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase().split("").sort(compareLetter).join(''); // сортируем буквы в каждом слове
        words[i] = words[i][0].toUpperCase() + words[i].substring(1, words[i].length);  // 1 буква прописная
    }

    words.sort(compareWord);   // сортируем слова в предложении

    return words.join(" "); // из массива строк получаем одну строку

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
