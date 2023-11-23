import React from 'react'
import Slider from './Slider'

function SliderDisplay() {
    const slides = [
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Unrec/R3/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB577798844_.jpg"},
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/sepatf23/unrec/one/upd/KA_3000._CB595840558_.jpg"},
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/November/Unrec/PC._CB572931684_.jpg"},
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg"},
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/3000X1200._CB574360222_.jpg"},
        { url : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"},
        { url : "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/sepatf23/unrec/one/upd/MA_3000._CB595840558_.jpg"}
      ]  
  return (
    <div>
        <Slider slides={slides}/>
    </div>
  )
}

export default SliderDisplay