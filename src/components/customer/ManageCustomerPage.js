import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as customerActions from '../../action/customerActions';
import CustomerForm from './CustomerForm';
import toastr from 'toastr';

class ManageCustomerPage extends React.Component {
  constructor (props, context) {                      //1. constructor - initialise the state and binds
    super(props, context);

    this.state = {
      customer: Object.assign({}, this.props.customer),
      errors:{},
      saving: false,
      deleting: false
    };

    this.updateCustomerState = this.updateCustomerState.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customer.id != nextProps.customer.id) {
      //Necessary to populate form when existing customer is loaded directly
      this.setState({customer: Object.assign({}, nextProps.customer)});
    }
  }

  updateCustomerState(event) {
    const field = event.target.name;
    let customer = this.state.customer;
    customer[field] = event.target.value;
    return this.setState({customer:customer});
  }

  saveCustomer(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCustomer(this.state.customer)
      .then(()=> this.redirectSave())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirectSave() {
    this.setState({saving: false});
    toastr.success('Customer Saved');
    this.context.router.push('/customers');
  }

  deleteCustomer(event, id) {
    event.preventDefault();
    this.setState({deleting: true});
    this.props.actions.deleteCustomer(this.state.customer.id)
      .then(()=> this.redirectDelete())
      .catch(error => {
        toastr.error(error);
        this.setState({deleting: false});
      });
  }

  redirectDelete() {
    this.setState({deleting: false});
    toastr.success('Customer Deleted');
    this.context.router.push('/customers');
  }

  render() {
    return (
      <CustomerForm
        allHotels={this.props.hotels}
        onChange = {this.updateCustomerState}
        onSave={this.saveCustomer}
        onDelete={this.deleteCustomer}
        customer ={this.state.customer}
        errors={this.state.errors}
        saving ={this.state.saving}
        deleting={this.state.deleting}
      />
    );
  }
}

ManageCustomerPage.propTypes = {                          //4 prop types validation
  customer: PropTypes.object.isRequired,
  hotels: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React router context so router is available on this.context.router.
ManageCustomerPage.contextTypes = {
  router: PropTypes.object
};

function getCustomerById(customers, id) {
  const customer = customers.filter(customer => customer.id == id);
  if (customer) return customer[0]; //since filter returns an array, have to grab the first
  return null;
}

function mapStateToProps(state,ownProps) {          // redux  connect functions
  const customerId = ownProps.params.id;            //from the path '/customer/:id'

  let customer ={id: '', watchHref: '', title:'', hotelId:'', checkInDate:'', email:''};

  if (customerId && state.customers.length > 0) {
    customer =getCustomerById(state.customers, customerId);
  }

  const hotelsFormattedForDropDown = state.hotels.map(hotel => {
    return {
      value: hotel.id,
      text: hotel.firstName + '' + hotel.lastName
    };
  });

  return{
    customer:customer,
    hotels: hotelsFormattedForDropDown
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCustomerPage);

