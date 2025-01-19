const getProducts = (bankName) => {
  switch (bankName) {
    case "ESAF Bank":
      return [
        { name: "Branch Round Seal", price: 70, img: 0 },
        { name: "Signature Verified Round Seal", price: 70, img: 1 },
        { name: "UV Verified Round Seal", price: 70, img: 2 },
        { name: "ORIGINAL VERIFIED", price: 70, img: 3 },
        { name: "TRANSFER", price: 260, img: 4 },
        { name: "RECEIVED", price: 260, img: 5 },
        { name: "CLEARED", price: 260, img: 6 },
        { name: "TOO LATE FOR TODAYS CLEARING", price: 260, img: 7 },
        { name: "All our Stamps are Cancelled", price: 70, img: 8 },
        { name: "CASH RECIEVED", price: 260, img: 9 },
        { name: "CASH PAID", price: 260, img: 10 },
        { name: "A/C PAYEE ONLY", price: 70, img: 11 },
        { name: "For Seal Authorised Signatory", price: 70, img: 12 },
        { name: "For Seal Branch Manager", price: 70, img: 13 },
        { name: "Payees Account Will be Credited on Realisation", price: 70, img: 14 },
        { name: "COUNTERFEIT BANK NOTE IMPOUNDED", price: 70, img: 15 },
        { name: "MUTILATION GAURANTEED", price: 70, img: 16 },
        { name: "Left Thump Impression", price: 70, img: 17 },
        { name: "De Dupe Done No Multiple CIF Existing", price: 70, img: 18 },
        { name: "Address Seal", price: 70, img: 19 },
        { name: "FOR AND ON BEHALF OF MINOR", price: 70, img: 20 },
        { name: "16 digit", price: 98, img: 21 },
        { name: "Special Crossing stamp", price: 70, img: 22 },
        { name: "Pay", price: 70 },
        { name: "PAY HALF VALUE Prescriber Officer", price: 70 },
        { name: "PAY HALF VALUE Receiver’s Initials ", price: 70 },
        { name: "REJECT", price: 70 },
        { name: "Emp Id Name Seal", price: 70 },
        { name: "Branch Name Name Seal", price: 70 },
        { name: "Emp Id Branch Name Name Seal", price: 70 },
      ];
    case "CSB Bank":
      return [
        { name: "Round Branch Seal", price: 368 },
        { name: "Manager Seal", price: 252},
        { name: "RECEIVED", price: 495 },
        { name: "SS No", price: 298 },
        { name: "UV/TV Checked", price: 252 },
        { name: "Signature Verified", price: 368 },
        { name: "Authorised Signatory", price: 413 },
        { name: "Account Closed", price: 514 },
        { name: "Duplicate DD No", price: 368 },
        { name: "TOO LATE FOR TODAY'S PROCESSING", price: 495 },
        { name: "STOP PAYMENT", price: 448 },
      ]
    default:
      return [];
  }
}

export {  getProducts};