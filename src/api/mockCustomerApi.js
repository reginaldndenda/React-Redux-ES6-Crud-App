import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    id: "1",
    title: "Reginald Ndenda",
    watchHref: "http://www.pluralsight.com/customers/react-flux-building-applications",
    hotelId: "sheraton-hotel",
    checkInDate: "2010-12-12",
    email: "ree@gmail.com"
  },
  {
    id: "2",
    title: "Jessica Ndenda",
    watchHref: "http://www.pluralsight.com/customers/writing-clean-code-humans",
    hotelId: "sheraton-hotel",
    checkInDate: "2010-12-12",
    email: "jnd@gmail.com"
  },
  {
    id: "3",
    title: "Kymani Ndena",
    watchHref: "http://www.pluralsight.com/customers/architecting-applications-dotnet",
    hotelId: "sheraton-hotel",
    checkInDate: "2010-12-12",
    email: "jnd@gmail.com"
  },
  {
    id: "4",
    title: "Ellashae Ndenda",
    watchHref: "http://www.pluralsight.com/customers/career-reboot-for-developer-mind",
    hotelId: "sheraton-hotel",
    checkInDate: "2010-12-12",
    email: "jnd@gmail.com"
  },
  {
    id: "5",
    title: "Franklin Ndenda",
    watchHref: "http://www.pluralsight.com/customers/web-components-shadow-dom",
    hotelId: "sheraton-hotel",
    checkInDate: "2010-12-12",
    email: "jnd@gmail.com"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (customer) => {
  return replaceAll(customer.title, ' ', '-');
};

class customerApi {
  static getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCustomer(customer) {
    customer = Object.assign({}, customer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCustomerTitleLength = 1;
        if (customer.title.length < minCustomerTitleLength) {
          reject(`Title must be at least ${minCustomerTitleLength} characters.`);
        }

        if (customer.id) {
          const existingcustomerIndex = customers.findIndex(a => a.id == customer.id);
          customers.splice(existingcustomerIndex, 1, customer);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new customers in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          customer.id = generateId(customer);
          customer.watchHref = `http://www.pluralsight.com/customers/${customer.id}`;
          customers.push(customer);
        }

        resolve(customer);
      }, delay);
    });
  }

  static deleteCustomer(customerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfcustomerToDelete = customers.findIndex(a => a.id === customerId);

        customers.splice(indexOfcustomerToDelete, 1, customerId);
        resolve();
      }, delay);
    });
  }
}

export default customerApi;
