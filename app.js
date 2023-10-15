function getWeather() {
    let c_name = document.querySelector('#inp-weather').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=dee20b2dccbf3a4ddf5f517a289d6499`)
        .then((res) => {
            document.querySelector('#temp').innerHTML = 'The Temperature is :' + res.data.main.temp

        })


        .catch((err) => {
            console.log(err)
        })
}