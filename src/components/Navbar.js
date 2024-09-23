import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({place, setplace, handleSubmit}) => (
    <>
        <nav className="navbar navbar-expand-sm bg-warning navbar-light mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">WeatherCentral</a>
                <form className="form-inline d-flex mx-auto my-2 my-lg-0" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Enter a City Name" aria-label="Search" value={place} onChange={(event) => setplace(event.target.value)}></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav">
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="/">Weather</Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="/air_quality">Air Quality</Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="/forecast">Forecast</Link>
                </li>
                </ul>
            </div>
        </nav>
    </>
    
  );
  
  export default Navbar;