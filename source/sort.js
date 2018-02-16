function sort(string) {
    const words = string.split(" ").filter(v => v !== '');  // из одной строки с пробелами получаем массив строк
    const collatorSort = new Intl.Collator().compare;

    return words.map( word => {
        word = word.toLowerCase().split("").sort(collatorSort).join("");
        return word[0].toUpperCase() + word.substring(1);
    }).sort(collatorSort).join(" ");
}
