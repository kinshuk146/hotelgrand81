import React from 'react'
import EachRoom from '../../components/EachRoom';
function Rooms() {
  return (
    <div style={{backgroundImage:'url(https://img.rawpixel.com/private/static/images/website/2022-05/rm218batch7-katie-14.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=138cc0996ce787dd279385b44f4392cd)',marginTop:'-2.5rem'}}>
        <EachRoom roomName="Grand Suite" imagelink="../../assets/SuperDeluxe1.png" price="₹3000"/>
        <EachRoom roomName="Super Deluxe Room" imagelink="../../assets/SuperDeluxe1.png" price="₹3000"/>
        <EachRoom roomName="Deluxe Room" imagelink="../../assets/SuperDeluxe1.png" price="₹3000"/>
    </div>
  )
}

export default Rooms
