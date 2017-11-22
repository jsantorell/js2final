
var dbRef;

$.when(
        $.getScript("javascripts/databaseModel/Reps.js"),
        $.Deferred(function (deferred) {
            $(deferred.resolve);
        })
        ).done(function () {

    $(document).ready(function () {

//event handlers

        dbRef.child('reps').on('child_added', getRep);
        dbRef.child('reps').on('child_removed', removeFromList);
    });


//add to db

    function getRep(snapshot) {
        //snapshot is the record
        //get data from the snapshot
        var rep = snapshot.val();

        //create li to add to page
        var li = $('<li>').text(rep.id + ' (saleDate: ' + rep.name + ') ' );
        //add "pk" to li
        li.attr('data-key', snapshot.key);

        var btn = $('<button>').text('X').click(removeTodo);

        li.append(btn);
        $('#salesLeaderBoard').append(li);
    }

//remove from db
    function removeTodo(e) {
        //get key from the li
        var key = $(this).parent('li').attr('data-key');
        dbRef.child('reps/' + key).remove();



    }

//remove from list
    function removeFromList(snapshot) {

        //remove li with matching key
        $('li[data-key=' + snapshot.key + ']').remove();

    }
});