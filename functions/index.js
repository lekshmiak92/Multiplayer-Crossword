const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();


exports.onGameUpdate = functions.database
  .ref("/{gameid}/gridData")
  .onUpdate((change, context) => {
    console.log(change.after.val())
    var obj = change.after.val();

    for (var i = 1; i <= obj.length; i++) {
      if (obj[i].setfield === false && obj[i].letter !== ".") {
        return change.after.ref.parent.update({ status: "onGoing" });
      } else {
        return change.after.ref.parent.update({ status: "gameEnd" });
      }
    }


  });

exports.onGameEnd = functions.database
  .ref("/{gameid}/reset")
  .onCreate((snapshot, context) => {
    console.log(snapshot.val())

    return snapshot.ref.parent.set(null);

  });