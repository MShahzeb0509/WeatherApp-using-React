import React from 'react'

const Navbar = () => {
    return (
        <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Weather App Search For the City Name</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <form class="d-flex" role="search">
                    <input id="city" class="form-control me-2" type="search" placeholder="City Name" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit" id="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

        </>
    )
}

export default Navbar
