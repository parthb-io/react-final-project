import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import './index.css'

import Image from 'react-bootstrap/Image'
import phone_money from '../../../assets/phone_money.png';
import banner_image from '../../../assets/banner_image.png';
import banner_image_2 from '../../../assets/banner_image_2.png';

const Home = () => {
  return (
    <>
      {/*<Header title="GoService">
      
     
        <p>
               <strong>Coming Soon!</strong>.
        </p>
        

        <p>
        Drum roll... Re-introducing Service Delivery! Services are now just a click away, any time, anywhere.
        </p>
        <div id="center">
        <img class="banner_image" src={phone_money} alt="phone_money"  id="banner-image" />
        </div>
  </Header>*/}
  <div class="cont">
        <div class="banner" >
            <p class="banner-heading" id="banner-text">Coming soon</p>
            <img class="banner-image" src={banner_image} id="banner-image-wide"></img>
            <img class="banner-image-2" src={banner_image_2.png} id="banner-image"></img>
            <p class="banner-sub-heading">Drum roll... Re-introducing Service Delivery! Services are now just a click away, any time, anywhere.</p>
            <div class="banner-indicators">
                <div class="circle-1" onclick="currentDiv(1)" id="circle1"></div>
                <div class="circle-2" onclick="currentDiv(2)" id="circle2"></div>
            </div>
        </div>
    </div>

      <Container>
      
        <hr/>

        

        <p>Copyright @ 2020 GoService - All Rights Reserved</p>
      </Container>
    </>
  );
}
 
export default Home;