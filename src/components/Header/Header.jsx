import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Unlock the world of books with Biblios. Your personal digital library, always at your fingertips.</h2><br />
                  <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header