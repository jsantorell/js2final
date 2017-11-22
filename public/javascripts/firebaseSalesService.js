
var dbRef;

$.when(
        $.getScript("javascripts/databaseModel/Sales.js"),
        $.Deferred(function (deferred) {
            $(deferred.resolve);
        })
        ).done(function () {


    $(document).ready(function () {


//event handlers
        dbRef.child('sales').on('child_added', getSale);
        dbRef.child('sales').on('child_removed', removeFromList);
    });


//add to db


    function getSale(snapshot) {
        //snapshot is the record
        //get data from the snapshot
        var sale = snapshot.val();

        //create li to add to page
        var li = $('<li>').text(sale.id + ' (saleDate: ' + sale.saleDate + ') ' + sale.saleType + '   ');
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
        dbRef.child('sales/' + key).remove();



    }

//remove from list
    function removeFromList(snapshot) {

        //remove li with matching key
        $('li[data-key=' + snapshot.key + ']').remove();

    }
});