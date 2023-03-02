import React from 'react'
import EachRoom from '../../components/EachRoom';
function Rooms() {
  return (
    <div style={{marginTop:'-2.5rem'}}>
        <EachRoom roomName="Grand Suite" imagelink="./assets/SuperDeluxe1.jpg" price="₹3000"/>
        <EachRoom roomName="Super Deluxe Room" imagelink="./assets/SuperDeluxe1.jpg" price="₹3000"/>
        <EachRoom roomName="Deluxe Room" imagelink="./assets/SuperDeluxe1.jpg" price="₹3000"/>
    </div>
  )
}

export default Rooms
