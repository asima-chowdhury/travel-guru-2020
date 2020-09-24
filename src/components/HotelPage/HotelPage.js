import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import fakeDataHotel from '../../fakeDataHotel';
import { useParams } from 'react-router-dom';
import HotelDetails from '../HotelDetails/HotelDetails';

const HotelPage = () => {
    const hotels = fakeDataHotel;
    // console.log(fakeDataHotel)

    const { id } = useParams();
    const filteredHotel = fakeDataHotel.filter(hotel => parseInt(hotel.hotelId) === parseInt(id));

    console.log(id, filteredHotel[id])
    // console.log(filteredHotel[id].placeName)

    return (
        <Container bg="light">
            <HeaderBlack></HeaderBlack>
            <Container>
                <div className="col-md-7">
                    <p>252 stays Apr 13-17 3 guests</p>
                    <h5 className="font-weight-bold">Stay in {filteredHotel[id].placeName}</h5>
                    {
                        filteredHotel.map(hotelDetails => <HotelDetails key={hotelDetails.key} hotelDetails={hotelDetails}></HotelDetails>)
                    }
                </div>
                <div className="col-md-5">

                </div>
            </Container>
        </Container>
    );
};

export default HotelPage;