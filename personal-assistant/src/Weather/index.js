import React, { useState, useEffect } from 'react'

const Weather = () => {
    const [weather, setWeather] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=886705b4c1182eb1c69f28eb8c520e20');
          const data = await res.json()
          setWeather(data.weather[0].description)
        }
        fetchData()
    }, []);

    return (
        <p style={{fontSize: '12pt', color: 'navy', fontFamily: 'verdana', textAlign: 'center'}}>conditions outside: {weather}</p>
    )
}

export default Weather