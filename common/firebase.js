<!-- Firebase COMPAT SDKs -->
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDC9PI7iyNINLkjKjN91L6sZjtpL3qwGc0",
    authDomain: "sato-arashi.firebaseapp.com",
    databaseURL: "https://sato-arashi-default-rtdb.firebaseio.com",
    projectId: "sato-arashi",
    storageBucket: "sato-arashi.appspot.com",
    messagingSenderId: "289229920632",
    appId: "1:289229920632:web:8a7de7d76b7bac1a30108d"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.database();
</script>
