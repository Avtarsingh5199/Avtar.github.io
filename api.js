//
var buttonlast = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');



buttonlast.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=651e85f7100681b2b4f6104f4bacc8c1')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })

        .catch(err => alert("Wrong City Name!"))
})