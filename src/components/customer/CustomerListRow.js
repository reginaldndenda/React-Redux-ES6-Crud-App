import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const CustomerListRow = ({customer}) => {

  return (
    <tr>
      <td><a href={customer.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/customer/' + customer.id}>{customer.title}</Link></td>
      <td>{customer.hotelId}</td>
      <td>{customer.email}</td>
      <td>{customer.checkInDate}</td>

    </tr>
  );
};


CustomerListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerListRow;
