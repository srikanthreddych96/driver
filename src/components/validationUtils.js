// validationUtils.js

export const validateLicenseNumber = (licenseNumber) => {
    const licensePattern = /^[A-Z0-9]{6,10}$/i;
    return licensePattern.test(licenseNumber);
  };
  
  export const validateContactNumber = (contactNumber) => {
    return contactNumber.length === 10;
  };
  
  export const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };
  