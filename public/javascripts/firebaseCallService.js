
var dbRef;

$.when(
        $.getScript("javascripts/databaseModel/Calls.js"),
        $.Deferred(function (deferred) {
            $(deferred.resolve);
        })
        ).done(function () {

    $(document).ready(function () {


//event handlers

        dbRef.child('calls').on('child_added', getCall);
        dbRef.child('calls').on('child_removed', removeFromList);
    });

        function getCall(snapshot) {
        //snapshot is the record
        //get data from the snapshot
        var call = snapshot.val();

        //create li to add to page
        var li = $('<li>').text(call.id + ' (timeStarted: ' + call.timeStarted + ') ' + call.timeEnded + '   ' + call.repId);
        //add "pk" to li
        li.attr('data-key', snapshot.key);

        var btn = $('<button>').text('X').click(removeTodo);

        li.append(btn);
        $('#callsLeaderBoard').append(li);
    }

//remove from db
    function removeTodo(e) {
        //get key from the li
        var key = $(this).parent('li').attr('data-key');
        dbRef.child('calls/' + key).remove();



    }

//remove from list
    function removeFromList(snapshot) {

        //remove li with matching key
        $('li[data-key=' + snapshot.key + ']').remove();

    }
});