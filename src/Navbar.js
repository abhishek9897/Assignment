import React, { useState } from 'react';
import "./navbar.css"
import Truck from "./AssignmentImages/Truck.png"
import Facebook from "./AssignmentImages/Facebook.png";
import Instagram from "./AssignmentImages/Instagram.png";
import Twitter from "./AssignmentImages/Twitter.png";
import Linkedin from "./AssignmentImages/Linkedin.png"

const Navbar = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <>
      <div className='d-flex justify-content-between  py-2 NavbarTop'>
        <div>
          <span className=''>
            <img className='pe-3 pb-1' src={Truck}></img>Free Delivery</span>
          <span className='px-3'>|</span><span>Return Policy</span>
        </div>
        <div>
          <span className='pe-5 me-2'>Login</span>
          <span className='followUs pe-3'>Follow US</span>
          <span className=''>
            <span>
              <img className='pe-2' src={Facebook}></img>
            </span>
            <span>
              <img className='pe-2' src={Linkedin}></img>
            </span>
            <span><img className='pe-2' src={Twitter}></img>
            </span>
            <span>
              <img className='pe-2' src={Instagram}></img>
            </span>
          </span>
        </div>
      </div>
      <div className="Navbar">

        <div className='NavbarHeader mx-lg-5 ps-lg-1 mx-1'>

          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <div class="brandName">Shopkart</div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav m-auto  mb-lg-0 navItems">
                  <li class="nav-item">Home</li>
                  <li class="nav-item">About</li>
                  <li class="nav-item">Our Products</li>
                  <li class="nav-item">Contact us</li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='productsInBag'>
            <span>Wishlist(0)</span><span>Bag(0)</span></div>
        </div>


        <div className='navbar_ul pb-lg-3'>
          {navbar.map((item) => (
            <li key={item.id} className={`${item.child ? "border border-1" : ""}`}>
              <p className={`${item.child ? "navbar_ul_items OurProductsBorder " : "navbar_ul_items "}`}>{item.name}</p>

              {item.child && (
                <ul className="submenu me-3">
                  {item.child.map((subItem) => (
                    <li className='ulRenderedLiItems' key={subItem.id}>{subItem.name}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;