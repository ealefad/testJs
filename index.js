var a = 5

console.log('1. a + 6 = ' + (a + 6))

try {
    JSON.parse('{}')
} catch (e) {

}


var myPromise = new Promise(function(resolve, reject) {
    // read from db
    console.log('2. INSIDE a promise initialization')
setTimeout(function () {
console.log('4. INSIDE a timeout async ... e.g. reading db or file')
resolve(111)
}, 5000)
})

var b = a + 5

myPromise.then(function (result) {
console.log('5. result of async is ' + result)
})

console.log('3. b = ', b)


myPromise.then(function (result) {
console.log('6. second result of async is ' + result)
})

