slowWord.getData('hello', 'goodbye', 'greeting')
.then((word) => {
    console.log(word)
    return slowWord.addBang(word)
})
.then((word) => {
    console.log(word)
    return slowWord.uppercase(word)
})
.then((word) => {
    console.log(word)
    return slowWord.pluralize(word)
})
.then((word) => {
    console.log(word)
})