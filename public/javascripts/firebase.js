
var dbRef;
$.when(
        $.getScript("javascripts/firebaseSalesService.js"),
        $.getScript("javascripts/firebaseCallService.js"),
        $.getScript("javascripts/firebaseRepsService.js"),
        $.Deferred(function (deferred) {
            $(deferred.resolve);
        })
        ).done(function () {
    $(document).ready(function () {



        initFirebase();
        //synchronizeDatabases();
    });
//create conn to db
    function initFirebase() {



        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCIRYOf4h2vabmcOtgPbSOBk3mUXyYHr8Q",
            authDomain: "callcenterperformancemonitor.firebaseapp.com",
            databaseURL: "https://callcenterperformancemonitor.firebaseio.com",
            projectId: "callcenterperformancemonitor",
            storageBucket: "callcenterperformancemonitor.appspot.com",
            messagingSenderId: "984897765127"
        };
        firebase.initializeApp(config);
        //create ref to db
        dbRef = firebase.database().ref('/');
        //or to ref a particular collection of db
        //dbRef = firebase.database().ref('/todos');





    }

});
