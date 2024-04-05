import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
   <div class="search">
  <input type="text" placeholder="Search..." />
</div>


<div className="bell-icon">
<span className="iconbell"></span> 
<span className="iconmenu"></span>
</div>

<div className="bell-icon"></div>
    </nav>
  );
};

export default Navbar;
