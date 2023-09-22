import React from 'react'
import LeftArrow from "./AssignmentImages/leftArrow.png"
import RightArrow from "./AssignmentImages/RightArrow.png"
import star from "./AssignmentImages/star.png";
import { Row, Col, Card } from "react-bootstrap"
import philipunsplash from "./AssignmentImages/philipunsplash.png"
import zamunsplash from "./AssignmentImages/zamunsplash.png"
import malickiunsplash from "./AssignmentImages/malickiunsplash.png"
import philip2unsplash from "./AssignmentImages/philip2unsplash.png"
import "./product.css"
import CardComponent from './CardComponent';
const Products = () => {
    return (
        <div className='products my-5'>
            <div className='d-flex justify-content-between mx-lg-5 ps-lg-3 mx-2 '>
                <div className='heading'>
                    <h2 className='newProducts'>New Products
                    </h2>
                    <div>
                        <img style={{ float: "left" }} src={star}></img>
                        <hr style={{ position: "relative", top: 10 }}></hr>
                    </div>
                </div>
                <div className='upperArrows'>
                    <img src={LeftArrow} alt='ds'></img>
                    <img src={RightArrow}></img>
                </div>

            </div>
            <Row >
                <Col xxl={3} xl={3} lg={3} md={3} className='ps-lg-5'>
                    <ul className="lists">
                        <li className='list-item'>
                            Apparel
                        </li>
                        <li className='list-item-accessory'>
                            Accessories
                        </li>
                        <li className='list-item'>
                            Best Sellers
                        </li>
                        <li className='list-item'>
                            50% off
                        </li>
                    </ul>
                </Col>
                <Col className='d-flex overflow-hidden'>
                    <CardComponent
                        width="18rem"
                        image={philipunsplash}
                        Heading="FLORIDA JACKET"
                        Description="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised"
                        price="$100"

                    />
                    <CardComponent
                        width="18rem"
                        image={zamunsplash}
                        Heading="FLORIDA JACKET"
                        Description="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised"
                        price="$100"

                    />

                    <CardComponent
                        width="18rem"
                        image={malickiunsplash}
                        Heading="FLORIDA JACKET"
                        Description="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised"
                        price="$100"

                    />
                    <CardComponent
                        width="18rem"
                        image={philip2unsplash}
                        Heading="FLORIDA JACKET"
                        Description="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised"
                        price="$100"

                    />

                </Col>
            </Row>
            <div className='lowerArrows d-flex justify-content-center'>
                <img src={LeftArrow} alt='ds'></img>
                <img src={RightArrow}></img>
            </div>
        </div>

    )
}

export default Products