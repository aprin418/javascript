function checkInstagram(username) {
    console.log(`Checking Instagram of ${username}`);
}
function makePhoneCall(contact) {
    console.log(`Calling ${contact}`);
}
function playSpotify(song) {
    console.log(`playinging ${song}`);
}
function checkEmail(emailProvider) {
    console.log(`Checking your ${emailProvider}`);
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
useMobileDevice('Android', playSpotify, 'Bad Medicine by Bon Jovi');
console.log('---');
useMobileDevice('iphone', sendEmail, 'Hello!');
console.log('---');
useMobileDevice('Android', checkInstagram, 'aprin418');
console.log('---');
useMobileDevice('iphone', checkEmail, 'Gmail');
console.log('---');
useMobileDevice('iphone', faceTime, 'Shawna');