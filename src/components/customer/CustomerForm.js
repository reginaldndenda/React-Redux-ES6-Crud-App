import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DateInput from '../common/DateInput';


const CustomerForm =({customer, allHotels, onSave,onDelete, onChange, saving, errors, deleting}) => {
  return (
    <form>
      <h1>Manage customer</h1>
      <TextInput
        name="title"
        label="Name"
        value={customer.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="hotelId"
        label="Hotel"
        value={customer.hotelId}
        defaultOption="Select Hotel"
        options={allHotels}
        onChange={onChange} error={errors.hotelId}/>

      <TextInput
        name="email"
        label="Email"
        value={customer.email}
        onChange={onChange}
        error={errors.email}/>

      <DateInput
        type="datetime"
        name="checkInDate"
        label="Check In Date"
        value={customer.checkInDate}
        onChange={onChange}
        error={errors.checkInDate}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />

      <input
        type="submit"
        disabled={deleting}
        value={deleting ? 'Deleting...' : 'Delete'}
        className="btn btn-danger"
        onClick={onDelete} />
    </form>
  );
};

CustomerForm.propTypes ={
  customer: React.PropTypes.object.isRequired,
  allHotels: React.PropTypes.object.array,
  onSave: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  deleting: React.PropTypes.bool,
  checkInDate:React.PropTypes.date,
  errors: React.PropTypes.object
};

export default CustomerForm;
