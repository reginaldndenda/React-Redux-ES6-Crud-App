import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const hotels = [
  {
    id: 'Sheraton-Hotel',
    firstName: 'Sheraton-',
    lastName: 'Hotel'
  },
  {
    id: 'Vegas-Hotel',
    firstName: 'Vegas-',
    lastName: 'Hotel'
  },
  {
    id: 'NY-Hotel',
    firstName: 'NY-',
    lastName: 'Hotel'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (hotel) => {
  return hotel.firstName.toLowerCase() + '-' + hotel.lastName.toLowerCase();
};

class HotelApi {
  static getAllHotels() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], hotels));
      }, delay);
    });
  }

  static saveHotel(hotel) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minHotelNameLength = 3;
        if (hotel.firstName.length < minHotelNameLength) {
          reject(`First Name must be at least ${minHotelNameLength} characters.`);
        }

        if (hotel.lastName.length < minHotelNameLength) {
          reject(`Last Name must be at least ${minHotelNameLength} characters.`);
        }

        if (hotel.id) {
          const existingHotelIndex = hotels.findIndex(a => a.id == hotel.id);
          hotels.splice(existingHotelIndex, 1, hotel);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          hotel.id = generateId(hotel);
          hotels.push(hotel);
        }

        resolve(Object.assign({}, hotel));
      }, delay);
    });
  }

  static deleteHotel(hotelId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfHotelToDelete = hotels.findIndex(hotel => {
          hotel.hotelId == hotelId;
        });
        hotels.splice(indexOfHotelToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default HotelApi;
