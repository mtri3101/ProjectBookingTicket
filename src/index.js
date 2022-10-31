import React from 'react';
import ReactDOM from 'react-dom/client';
import BookingTicket from './Pages/BookingTicket';
import { Provider } from 'react-redux';
import {store} from './Redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <BookingTicket/>
 </Provider>
);


