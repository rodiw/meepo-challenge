/* Get the queries */
window.onload = function () {
    getQuerys();
}
/* Variables declaration */
var url = 'https://timesheet-1172.appspot.com/42beb4d4/notes';
var getQueryBtn = document.querySelector('#get-query');
var postQueryBtn = document.querySelector('#post-query');
var putQueryBtn = document.querySelector('#put-query');
var titleInput = document.querySelector(".title");
var descriptionInput = document.querySelector(".description");



/* GET, POST, PUT and DELETE logic */
/*getQueryBtn.addEventListener('click', function () {
    getQuerys();
});*/

postQueryBtn.addEventListener('click', function () {
    axios({
        method: 'POST',
        url: url,
        data: {
            description: descriptionInput.value,
            title: titleInput.value
        } 
    })
    .then(function (val) {
        $('.list-holder').append("<div id=" + val.id + " class='list-card'><i data-id=" + val.id + " class='fa fa-check fa-2x done'></i><div data-id=" + val.id + "><input type = 'text' class = 'title' placeholder = 'Title' value='" + val.title + "'/><input value='" + val.description + "' type = 'text' class = 'description' placeholder = 'Description'/></div><i data-id=" + val.id + " class='fa fa-pencil-square-o fa-2x edit'></i><i data-id=" + val.id + " class='fa fa-times fa-2x delete'></i></div>");
    })
    .catch(function (error) {
        console.log(error);
    });
});

$('.list-holder').on('click', '.edit', function () {
    let id = $(this).attr("data-id");
    axios.put(url + '/' + id, {
        description: descriptionInput.value,
        title: titleInput.value
    })
    .then(function (val) {
        $('div[id=' + id + ']').remove();
        $('.list-holder').append("<div id=" + val.id + " class='list-card'><i data-id=" + val.id + " class='fa fa-check fa-2x done'></i><div data-id=" + val.id + "><input type = 'text' class = 'title' placeholder = 'Title' value='" + val.title + "'/><input value='" + val.description + "' type = 'text' class = 'description' placeholder = 'Description'/></div><i data-id=" + val.id + " class='fa fa-pencil-square-o fa-2x edit'></i><i data-id=" + val.id + " class='fa fa-times fa-2x delete'></i></div>");
    })
    .catch(function (error) {
        console.log(error);
    });
});

$('.list-holder').on('click', '.delete', function () {
    let id = $(this).attr("data-id");
    axios.delete(url + '/' + id) // Gets data-id attribute and deletes it
    .then(function () {
        $('div[id=' + id + ']').remove();
    })
    .catch(function (error) {
        console.log(error);
    });
});

$('.list-holder').on('click', '.done', function () {
    $('div[data-id=' + $(this).attr('data-id') +']').toggleClass('finished');
});

function printMethod (arr) {
    $('.list-holder').empty()
    arr.forEach(function (val) {
        let title = val.title;
        console.log(title);
        $('.list-holder').append("<div id=" + val.id + " class='list-card'><i data-id=" + val.id + " class='fa fa-check fa-2x done'></i><div data-id=" + val.id + "><input type = 'text' class = 'title' placeholder = 'Title' value='" + val.title + "'/><input value='" + val.description + "' type = 'text' class = 'description' placeholder = 'Description'/></div><i data-id=" + val.id + " class='fa fa-pencil-square-o fa-2x edit'></i><i data-id=" + val.id + " class='fa fa-times fa-2x delete'></i></div>");
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

