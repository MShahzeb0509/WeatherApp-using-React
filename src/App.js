import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import './App.css';

function App() {

  const apikey = "124a461076eb650708d4f43c44879022";
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey;
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
    setInputCity("")
  }


  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-danger" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

     { Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded weatherResultBox">
            <img className="weatherIcon" src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png' alt="image" />
            <h5 className="weatherCity">
              {data?.name} Temperature
              {/* Delhi */}
            </h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(0)}°C</h6>
            {/* <h6 className="weatherTemp">35°C</h6> */}
          </div>
        </div>
      
     }
    </div>
  );
}

export default App;