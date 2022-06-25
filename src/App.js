/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import WeatherBoard from './components/WeatherBoard';
import Weather from './components/WeatherBoard';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Search/>}/>
                    <Route path="/forecast" element={<WeatherBoard/>}/>
                </Routes>
            </BrowserRouter>
            {/* <WeatherBoard/> */}
      
        </div>
    );
}

export default App;
