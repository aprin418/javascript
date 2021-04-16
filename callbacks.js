function checkInstagram(username) {
    // write code and test
}
function makePhoneCall(contact) {
    console.log(`Calling ${contact}`);
}
function playSpotify(song) {
    console.log(`playing ${song} now`);
}
function checkEmail(emailProvider) {
    // write code and test
}
function sendEmail(message) {
    console.log(`Sending ${message}`)
}
function sendTextMessage(contact) {
    console.log(`Yo, what's the word ${contact}`);
}
function takePicture(filter) {
    console.log(`Take picture with ${filter} filter`);
}
function faceTime(friend) {
    console.log(`Facetiming my friend ${friend}...`);
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}
useMobileDevice('iPhone', sendTextMessage, 'Sebastian');
console.log('---');
useMobileDevice('Android', faceTime, 'Jake');
console.log('---');
useMobileDevice('iPhone', takePicture, 'portrait');
console.log('---');
useMobileDevice('android', makePhoneCall, 'Aaron');
console.log('---');
useMobileDevice('Android', playSpotify, 'Bad Medicine');
console.log('---');
useMobileDevice('Iphone', sendEmail, 'Hello!');