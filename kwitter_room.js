
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAcFlZNcWM47A3hLBUuFBVSszi66nfFoqk",
      authDomain: "kwitter-6e475.firebaseapp.com",
      databaseURL: "https://kwitter-6e475-default-rtdb.firebaseio.com",
      projectId: "kwitter-6e475",
      storageBucket: "kwitter-6e475.appspot.com",
      messagingSenderId: "425157004836",
      appId: "1:425157004836:web:f4882629dc060e09c552b1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
       user_name = localStorage.getItem("user_name");
       document.getElementById("user_name").innerHTML = "Welcome "+user_name;

    
    function addroom(){
          room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  dog:"Oscar"
            });
            localStorage.setItem("room_name",room_name);
            window.location = "kwiter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;



      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("Room name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}