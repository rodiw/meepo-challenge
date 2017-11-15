var url = 'https://timesheet-1172.appspot.com/42beb4d4/notes';

var getQueryBtn = document.querySelector('#get-query');
var postQueryBtn = document.querySelector('#post-query');
var putQueryBtn = document.querySelector('#put-query');
var deleteQueryBtn = document.querySelector('#delete-query');


getQueryBtn.addEventListener('click', function () {
    axios.get(url)
    .then(function (response) {
        console.log(response.data);
    });
});

postQueryBtn.addEventListener('click', function () {
    axios.post(url, {
        data: {
            description: "Checking if this post-request works",
            title: "Post-request"
        }
    }); 
});

putQueryBtn.addEventListener('click', function () {
    axios.put(url + '/4', {
            description: "Checking if this Put-request works",
            title: "Put-request"
        });
});


deleteQueryBtn.addEventListener('click', function () {
    axios.delete(url + '/3' );
});




