var url = 'https://timesheet-1172.appspot.com/42beb4d4/notes';

var getQueryBtn = document.querySelector('#get-query');
var postQueryBtn = document.querySelector('#post-query');


getQueryBtn.addEventListener('click', function () {
    axios.get(url)
    .then(function (response) {
        console.log(response.data);
    });
});

postQueryBtn.addEventListener('click', function () {
    axios({
        method: 'POST',
        url: url,
        data: {
            description: "Checking if this post-request works",
            title: "Post-request"
        }
    }); 
});