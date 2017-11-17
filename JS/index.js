/* Variables declaration */
var url = 'https://timesheet-1172.appspot.com/42beb4d4/notes';
var getQueryBtn = document.querySelector('#get-query');
var postQueryBtn = document.querySelector('#post-query');
var putQueryBtn = document.querySelector('#put-query');
var deleteQueryBtn = document.querySelector('#delete-query');
var titleInput = document.querySelector("#title");
var descriptionInput = document.querySelector("#description");
var deleteInput = document.querySelector('#delete-value');


var getId = document.querySelectorAll('p');

function deleteQuery() {
    for (var i = 0; i < getId.length; i++) {
        getId[i].addEventListener('click', function (event) {
            console.log(this.id);
        });
    }
}


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

deleteQueryBtn.addEventListener('click', function () {
    console.log(deleteInput.value);
    axios.delete(url + '/' + deleteInput.value)
    .then(getQuerys)
    .catch(function (error) {
        console.log(error);
    });
});


function printMethod (arr) {
    $('.container').empty()
    arr.forEach(function (val) {
        $('.container').append("<p data-id=" + val.id + ">" + val.title + ": " + val.description + "</p> <button class='delete'>Delete</button>");
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

