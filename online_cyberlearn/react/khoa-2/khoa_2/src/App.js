
import React from 'react';
import ProducList from './Props/ProducList';
import AppProps from './Props/AppProps';
import DanhSachSp from './RenderPhone/ListProducts';
import CarStore from './CarStore/CarStore';

import CartRedux from './CartRedux/CartRedux';
import GameTaiXiu from './GameTaiXiu/GameTaiXiu';
import PhoneHome from './RenderPhone/PhoneHome';
import OanTuXi from './GameOanTuXi/OanTuXi';
import Bookingticket from './BookingTicket/Bookingticket';

const App = () => {
  return (
    <div>
      {/* <AppProps /> */}
      {/* <PhoneHome /> */}
      {/* <CarStore /> */}
       {/* <CartRedux />   */}
      {/* <GameTaiXiu /> */}
      {/* <OanTuXi /> */}
      <Bookingticket />
    </div>
  );
}

export default App;
