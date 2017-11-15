var url = 'https://timesheet-1172.appspot.com/42beb4d4/notes';

var queryBtn = document.querySelector('#get-query');


queryBtn.addEventListener('click', function () {
    axios.get(url)
    .then(function (response) {
        console.log(response);
    });
});
