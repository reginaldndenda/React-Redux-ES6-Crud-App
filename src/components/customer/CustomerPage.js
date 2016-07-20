import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as customerActions from '../../action/customerActions';
import CustomerList from './CustomerList';
import {browserHistory} from 'react-router';

class CustomersPage extends React.Component {
  constructor (props, context) {                      //1. constructor - initialise the state and binds
    super(props, context);
    this.redirectToAddCustomerPage = this.redirectToAddCustomerPage.bind(this);
  }

  customerRow(customer, index){
    return <div key={index}>{customer.title}</div>;
  }

  redirectToAddCustomerPage() {
    browserHistory.push('/customer');
  }

  render() {
    const {customers} = this.props;

    return (
    <div>
      <hi>Customers</hi>
      <div>
        <input type="submit"
               value="Add Customer"
               className ="btn btn-primary"
               onClick={this.redirectToAddCustomerPage}/>
        </div>
      <CustomerList customers={customers} />
    </div>
  );
  }
}
CustomersPage.propTypes = {                          //4 prop types validation
  customers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {          // redux  connect functions
  return{
    customers:state.customers
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);
