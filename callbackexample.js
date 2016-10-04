// var fs = require("fs");
//
// fs.readFile('./callback.txt', function cb(err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchrous read: " + data.toString());
// });
//
// console.log("Marie Hughes")

// Synchronous read
// var data = fs.readFileSync('./callback.txt');
// console.log("Synchronous read: " + data.toString());
//
// console.log("Program Ended")

downloadPhoto('https://static.pexels.com/photos/40815/youth-active-jump-happy-40815-medium.jpeg', handlePhoto)

function handlePhoto (error, photo) {
  if (error) console.error('Download error!', error)
  else console.log('Download finished', photo)
}

// downloadPhoto('https://static.pexels.com/photos/40815/youth-active-jump-happy-40815-medium.jpeg', handlePhoto)
//
// function handlePhoto (error, photo) {
//   if (error) console.error('Download error!', error)
//   else console.log('Download finished', photo)
// }


console.log('Download started')
console.log('Traning in git')
console.log("Last test")
console.log("las test")
console.log("Have now switched to feature b")
console.log("Add another line to featureb")
console.log("Feature a")
