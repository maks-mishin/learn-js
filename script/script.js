function learnJS(lang, callback) {
    console.log("I am learning " + lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("I had third lesson");
});