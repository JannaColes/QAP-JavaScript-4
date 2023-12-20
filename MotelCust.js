// Define the MotelCustomer object
const MotelCustomer = {
  name: '',
  birthDate: '',
  gender: '',
  roomPreferences: [],
  paymentMethod: '',
  mailingAddress: {
    street: '',
    city: '',
    province: '', // Corrected 'state' to 'province'
    postalCode: ''
  },
  phoneNumber: '',
  checkInDateTime: {},
  checkOutDateTime: {},
  loyaltyPoints: 0, // New property to track loyalty points
  // Method to calculate age based on birthDate
  getAge: function() {
    const birthYear = new Date(this.birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  },
  // Method to calculate duration of stay in days
  getDurationOfStay: function() {
    const checkInDate = new Date(this.checkInDateTime);
    const checkOutDate = new Date(this.checkOutDateTime);
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  },
  // Method to format date in a human-readable format
  formatDate: function(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  },
  // Method to generate customer description
  generateDescription: function() {
    return `Customer Name: ${this.name}
    Age: ${this.getAge()}
    Gender: ${this.gender}
    Room Preferences: ${this.roomPreferences.join(', ')}
    Payment Method: ${this.paymentMethod}
    Mailing Address: 
      Street: ${this.mailingAddress.street}
      City: ${this.mailingAddress.city}
      Province: ${this.mailingAddress.province}
      Postal Code: ${this.mailingAddress.postalCode}
    Phone Number: ${this.phoneNumber}
    Check-in Date: ${this.formatDate(this.checkInDateTime)}
    Check-out Date: ${this.formatDate(this.checkOutDateTime)}
    Duration of Stay: ${this.getDurationOfStay()} days
    Loyalty Points Earned: ${this.loyaltyPoints}`; // Added loyalty points to the description
  },
  // Method to perform online check-in
  performOnlineCheckIn: function() {
    // Some online check-in logic goes here
    console.log(`${this.name} has completed online check-in. Enjoy your stay!`);
  }
};

// Create a new customer instance
const customer = Object.create(MotelCustomer);

// Set customer attributes
customer.name = 'Janna Coles';
customer.birthDate = '1986-12-10';
customer.gender = 'Female';
customer.roomPreferences = ['Non-Smoking', 'Double Bed'];
customer.paymentMethod = 'Credit Card';
customer.mailingAddress = {
  street: '6 Collegiate Drive',
  city: 'Roddickton',
  province: 'Newfoundland', // Corrected 'state' to 'province'
  postalCode: 'A0K4P0'
};
customer.phoneNumber = '709-457-7179';
customer.checkInDateTime = '2023-07-01T14:00:00';
customer.checkOutDateTime = '2023-07-07T11:00:00';
customer.loyaltyPoints = 100; // Set initial loyalty points

// Generate customer description
const customerDescription = customer.generateDescription();
console.log(customerDescription);

// Perform online check-in
customer.performOnlineCheckIn();