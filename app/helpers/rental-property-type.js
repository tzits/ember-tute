import Ember from 'ember';

const communityPropertTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]/*, hash*/) {
  if (communityPropertTypes.includes(type)) {
    return 'Community';
  } else {
    return 'Solo'
  }
}

export default Ember.Helper.helper(rentalPropertyType);
