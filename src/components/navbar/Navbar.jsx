import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <div className="Navbar__container">
      <div className="Student__list-links">
        <div className="Student__list-links_logo">
          <div className="student__links_container">
            <p><a href='#home'>Home</a></p>
            <p><a href='#Timetable'>TimeTable</a></p>
            <p><a href='#Assignments'>Assignments</a></p>
            <p><a href='#marks'>Marks</a></p>
          </div>
        </div>
        <div className="student__links_sign">
          <p><a>Sign In</a></p>
          <button type='button'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
