import React, { useState } from "react";
import "./Bus.css";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from "../../../assets/logo-icon.png";
import Form from "../../form/Form";
import cancel from "../../../assets/cancel.jpg";
import emailjs from 'emailjs-com'

const BusMenuContainer = () => {

  function sentEmail(e) {
    e.preventDefault();
    setFormOpen(true);


    // const selectedFromAirport = document.getElementById('from-airport').textContent;
    // console.log(selectedFromAirport)

    emailjs.sendForm(
      'service_fra7o2t',
      'template_yj1uuyx',
      e.target,
      'nl1nLv6edpGfiDMyl',
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
  //  bus from
  const [departureCity, setDepartureCity] = useState("");

  // bus to
  const [busToCity, setBusToCity] = useState("");

  // user form
  const [formOpen, setFormOpen] = useState(false);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const formControl = () => {
    setFormOpen(true);
  };

  // bus date
  const [BusDate, setBusDate] = useState("");

  return (
    <div>
      <form className="bus-ticket-booking" id="bus-form" onSubmit={sentEmail}>
        <div className="bus-left-card">
          <div className="heading">
            <h1 style={{ color: "#0068B4" }}>Bus Ticket Booking</h1>
            <div className="bus-line"></div>
          </div>
          <div className="bus-box">
            <div className="bus-from">
              <p>
                <span>FROM</span>
                {/* bus from input */}
                <input
                  id="departure-city"
                  type="text"
                  placeholder="Select Departure City"
                  name="departureCity"
                  value={departureCity}
                  onChange={(event) => setDepartureCity(event.target.value)}
                  required
                />
                <IoMdArrowDropdown />
              </p>
            </div>
            <div className="bus-from">
              <p>
                <span>To</span>
                <input
                  id="bus-to-city"
                  type="text"
                  placeholder="Select Bus To City"
                  name="bus-To-City"
                  value={busToCity}
                  onChange={(event) => setBusToCity(event.target.value)}
                  required
                />
                <IoMdArrowDropdown />
              </p>
            </div>
          </div>
          <div className="bus-departs">
            <div className="departs">
              <input
                type="date"
                value={BusDate}
                onChange={(event) => setBusDate(event.target.value)}
                name="bus-date"
                id="bus-date"
                required
              />
            </div>
            <div className="bus-btn">
              <button className="bus-btn" type="submit" onClick={formControl}>
                Search Bus
              </button>
            </div>
          </div>
        </div>
        <div className="bus-right-card">
          <h4 style={{ color: "#960606" }}>Customer services</h4>
          <hr />
          <img src={Logo} alt="" />
          <h4>My Bookings</h4>
          <hr />
          <img src={cancel} alt="" />
          <h4>View Cancellations</h4>
          <hr />
        </div>
      </form>
      {/* user booking form  */}
      {formOpen && <Form onClose={handleFormClose} />}
      <hr />
      <div className="bus-footer">
        <p>Online Bus Ticket Booking Advantages</p>
        <p>
          Booking tickets online have never been easier and more convenient.
          Here are a few advantages of booking bus tickets online to help you
          get started.
        </p>

        <ol start="1">
          <li>24/7 Reservation - Bus Ticket Booking</li>

          <p>
            Compared to the traditional way of booking bus tickets, online
            booking has made it easier and for us to book for tickets as per our
            convenience. The disadvantage of travelling to the booking office or
            waiting in a line can now be avoided because of online booking.
          </p>
          <li>Commission Free - Bus Ticket Booking</li>

          <p>
            We save money as we no longer have to give commissions to travel
            agents who act as middlemen.
          </p>
          <li>Discount codes - Bus Ticket Booking</li>

          <p>
            Many online companies now offer seasonal and festive discount
            coupons which lead to more savings. This is another added advantage
            to the convenience of online bookings
          </p>
          <li>Seat of your choice - Bus Ticket Booking</li>

          <p>
            Online booking portals give us an overview of all the seats that are
            available and we have the choice to choose from all the options
            available. The presence of middlemen usually caused a bias depending
            on how much commission was paid to them
          </p>
        </ol>
      </div>
    </div>
  );
};

export default BusMenuContainer;











