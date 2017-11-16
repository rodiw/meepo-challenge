/* Variables declaration */
var url = 'https://timesheet-1172.appspot.com/42beb4d4/notes';
var getQueryBtn = document.querySelector('#get-query');
var postQueryBtn = document.querySelector('#post-query');
var putQueryBtn = document.querySelector('#put-query');
var deleteQueryBtn = document.querySelector('#delete-query');




/* GET, POST, PUT and DELETE logic */
getQueryBtn.addEventListener('click', function () {
    getQuerys();
});

postQueryBtn.addEventListener('click', function () {
    axios({
        method: 'POST',
        url: url,
        data: {
            description: "TEST Checking if this post-request works",
            title: "TEST NEW Post-request" 
        } 
    });
    getQuerys(); 
});

putQueryBtn.addEventListener('click', function () {
    axios.put(url + '/29', {
            description: "Checking if this Put-request works",
            title: "Put-request"
        });
});

deleteQueryBtn.addEventListener('click', function () {
    axios.delete(url + '/3' );
});


function printMethod (arr) {
    $('.container').empty()
    arr.forEach(function (val) {
        $('.container').append("<p>" + val.description + "</p>")
    });
}

function getQuerys () {
    axios.get(url)
    .then(function (response) {
        printMethod(response.data);
    });
}

