import React, {PropTypes} from 'react';
import CustomerListRow from './CustomerListRow';

const CustomerList =({customers}) => {
  return (
    <table className = "table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Name;</th>
        <th>Hotel;</th>
        <th>Email</th>
        <th>Check In Date</th>
      </tr>
      </thead>
      <tbody>
      {customers.map(customer =>
         <CustomerListRow key ={customer.id} customer={customer} />
      )}
      </tbody>
    </table>
  );
};

CustomerList.propTypes = {
  customers : PropTypes.array.isRequired
};

export default CustomerList;

