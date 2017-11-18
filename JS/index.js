/* Get the queries */
window.onload = function () {
    getQuerys();
}
/* Variables declaration */
var url = 'https://timesheet-1172.appspot.com/42beb4d4/notes';
var getQueryBtn = document.querySelector('#get-query');
var postQueryBtn = document.querySelector('#post-query');
var putQueryBtn = document.querySelector('#put-query');
var titleInput = document.querySelector("#title");
var descriptionInput = document.querySelector("#description");


// Gets the attribute ID from the X span
/*$('.list-holder').on('click', '.delete', function () {
    console.log($(this).attr("data-id"));
});*/


/* GET, POST, PUT and DELETE logic */
getQueryBtn.addEventListener('click', function () {
    getQuerys();
});

postQueryBtn.addEventListener('click', function () {
    axios({
        method: 'POST',
        url: url,
        data: {
            description: descriptionInput.value,
            title: titleInput.value
        } 
    })
    .then(setTimeout(getQuerys, 400))
    .catch(function (error) {
        console.log(error);
    });
});

putQueryBtn.addEventListener('click', function () {
    axios.put(url + '/33', {
        description: descriptionInput.value,
        title: titleInput.value
    })
    .then(getQuerys)
    .catch(function (error) {
        console.log(error);
    });


});

$('.list-holder').on('click', '.delete', function () {
    axios.delete(url + '/' + $(this).attr("data-id")) // Gets data-id attribute and deletes it
    .then(setTimeout(getQuerys, 400))
    .catch(function (error) {
        console.log(error);
    });
});


function printMethod (arr) {
    $('.list-holder').empty()
    arr.forEach(function (val) {
        $('.list-holder').append("<div class='list-card'><i data-id=" + val.id + " class='fa fa-check fa-2x'></i><div><h2>" + val.title + "</h2><h3>" + val.description + "</h3></div><i data-id=" + val.id + " class='fa fa-times fa-2x delete'></i></div>");
    });
}

function getQuerys () {
    axios.get(url)
    .then(function (response) {
        printMethod(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

