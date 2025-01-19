import Seal1 from '../Components/Seal/Seal1';
import Seal2 from '../Components/Seal/Seal2';
import Seal3 from '../Components/Seal/Seal3';
import Seal4 from '../Components/Seal/Seal4';
import Seal5 from '../Components/Seal/Seal5';
import Seal6 from '../Components/Seal/Seal6';
import Seal7 from '../Components/Seal/Seal7';
import Seal8 from '../Components/Seal/Seal8';
import Seal9 from '../Components/Seal/Seal9';
import Seal10 from '../Components/Seal/Seal10';
import Seal11 from '../Components/Seal/Seal11';
import Seal12 from '../Components/Seal/Seal12';
import Seal13 from '../Components/Seal/Seal13';
import Seal14 from '../Components/Seal/Seal14';
import Seal15 from '../Components/Seal/Seal15';
import Seal16 from '../Components/Seal/Seal16';
import Seal17 from '../Components/Seal/Seal17';
import Seal18 from '../Components/Seal/Seal18';
import Seal19 from '../Components/Seal/Seal19';
import Seal20 from '../Components/Seal/Seal20';
import Seal21 from '../Components/Seal/Seal21';
import Seal22 from '../Components/Seal/Seal22';
import Seal23 from '../Components/Seal/Seal23';
import Seal24 from '../Components/Seal/Seal24';
import Seal25 from '../Components/Seal/Seal25';
import Seal26 from '../Components/Seal/Seal26';
import Seal27 from '../Components/Seal/Seal27';
import Seal28 from '../Components/Seal/Seal28';
import Seal29 from '../Components/Seal/Seal29';
import Seal30 from '../Components/Seal/Seal30';

const getSeals = (bankName) => {
  
}

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

export { getSeals, getProducts};