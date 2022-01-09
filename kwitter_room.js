
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDO4bMy2uaAXaBs0Uaq006IywNpgY4a8P4",
      authDomain: "kwitter-3bc33.firebaseapp.com",
      projectId: "kwitter-3bc33",
      storageBucket: "kwitter-3bc33.appspot.com",
      messagingSenderId: "298065077675",
      appId: "1:298065077675:web:5a303528bfaeac1a5ddeee"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
