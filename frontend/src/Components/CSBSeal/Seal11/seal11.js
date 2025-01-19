document.addEventListener('DOMContentLoaded', () => {
    const customerDateField = document.querySelector('.stamp-box p:nth-of-type(1)');
    const empIdField = document.querySelector('.stamp-box p:nth-of-type(2)');
  
    // Example of dynamic update
    customerDateField.textContent = "Date & Time of Receipt From Customer : " + new Date().toLocaleString();
    empIdField.textContent = "Request Accepted By (Emp ID) : EMP1234";
  });
  