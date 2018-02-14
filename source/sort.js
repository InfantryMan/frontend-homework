function sort(string) {
    let words = string.split(" ").filter(v => v !== '');  // из одной строки с пробелами получаем массив строк
    let collator = new Intl.Collator();
    let sortedWord = null;

    return words.map( word => {
        return(sortedWord = word.toLowerCase().split("").sort(collator.compare).join(""))
        [0].toUpperCase() + sortedWord.substring(1, word.length);
    }).sort(collator.compare).join(" ");
}
