import mongoose from "mongoose";

const bankAccSchema = new mongoose.Schema({
    ifsc: {
        type: String,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true,
        unique: true
    },
    logo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    rolepwds: {
        type: Array,

    }
}, { minimize: false })

const bankAccModel = mongoose.models.bankAcc || mongoose.model('bankAcc', bankAccSchema)

// Function to initialize the database and insert sample data
const initializeDatabase = async () => {
    try {
        // Sample data to insert
        const sampleData = [
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1102,
                branchName: "Kalathode",
                address: "V/140/(2) Jsr Square Building, Kalathode, Ollukkara (Po). Thrissur District. Pin 680655.",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1107,
                branchName: "Kattapana",
                address: "11/239-D Mani'S Complex, Village Office Road, Near New Bus Stand, Kattappana- 685508",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1115,
                branchName: "Thiruvalla",
                address: "Xxvi 185/1 Pulimattathu Building, Ramanchira, Muthoor P.O. Thiruvalla, Pathanamthitta 689107.",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1103,
                branchName: "Edapally",
                address: "38/211 A, Grace Tower, Near Edappally Bye Pass Junction, Edappally \u2013 Ernakulam 682024",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1111,
                branchName: "Perumbavoor",
                address: "20/1170 A, Near Jacobite Church, Kottayam Road, Perumbavoor, Ernakulam 683542.",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1105,
                branchName: "Palai",
                address: "Melhor Building, Room No 372, A1, Near Rto Office , Chethimattom, Palai Kottayam 686575.",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1108,
                branchName: "Kozhikode",
                address: "6/140 A, G, Grand Arcade, Near Christian College, Kannur Road, Nadakkavu, Kozhikode 673011",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1110,
                branchName: "Perinthalmanna",
                address: "14/32/6, Metro Tower, Ground Floor, Jubilee Junction, Pattambi Road, Perinthalmanna, Malappuram 679322.",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1109,
                branchName: "Chandranagar",
                address: "Room No A3/3163/15, Ground Floor , Khloe Complex, Nh, Chandra Nagar, Palakkad 678007.",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1136,
                branchName: "Kuzhalmannam II",
                address: "Xv/381 Kannanur Junction,Kuzhalmannam-Ii,Kannadi,Palakkad 678702",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "ESMF0000001",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "0212",
                branchName: "Araria",
                address: "Xv/381 Kannanur Junction,Kuzhalmannam-Ii,Kannadi,Palakkad 678702",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "CSBK0000001",
                bankName: "CSB Bank",
                "logo": "https://companieslogo.com/img/orig/CSBBANK.NS_BIG-25254ded.png?t=1720244491",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "0111",
                branchName: "Adoor",
                address: "Kannamcode Road, Kannamkode, Adoor, Kerala 691523",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "CSBK0000001",
                bankName: "CSB Bank",
                "logo": "https://companieslogo.com/img/orig/CSBBANK.NS_BIG-25254ded.png?t=1720244491",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "001A",
                branchName: "Alappuzha",
                address: "Mullakkal, Alappuzha, Kerala 688001",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "CSBK0000001",
                bankName: "CSB Bank",
                "logo": "https://companieslogo.com/img/orig/CSBBANK.NS_BIG-25254ded.png?t=1720244491",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "0136",
                branchName: "Alengad",
                address: "Kottapuram, Alangad, Kerala 683511,",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "CSBK0000001",
                bankName: "CSB Bank",
                "logo": "https://companieslogo.com/img/orig/CSBBANK.NS_BIG-25254ded.png?t=1720244491",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "0006",
                branchName: "Althara",
                address: "Punnayurkulam, Thrissur, Kerala 679561",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "CSBK0000001",
                bankName: "CSB Bank",
                "logo": "https://companieslogo.com/img/orig/CSBBANK.NS_BIG-25254ded.png?t=1720244491",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "0425",
                branchName: "Attur",
                address: "Attur, Thrissur, Kerala 680583",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            },
            {
                ifsc: "FDRL0000001",
                bankName: "Federal Bank",
                "logo": "https://companieslogo.com/img/orig/FEDERALBNK.NS_BIG-37520d13.png?t=1720244491",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "1398",
                branchName: "Bandra",
                address: "B-989 CASA ADRIANA, 15, ST. JOHN BAPTIST ROAD, BANDRA (WEST), MUMBAI, 400050",
                rolepwds: ["$2b$10$oJ0yndxEEwgAnSA7SgP3nOpkkfKzJbw3KaCo7uv8nquT.w8uvUwpO", "$2b$10$lEcAIzFeg2E1NqBdUsmc0.Q.vzYlkVeXaATRZpzd4dpoAfd7VpDNG"]
            }
        ]

        // Insert sample data into the collection
        await bankAccModel.insertMany(sampleData);

        console.log("Sample data inserted successfully");

    } catch (error) {
        //console.error("Error initializing database:", error);
    } finally {
    }
};

// Call the function to initialize the database
initializeDatabase();


export default bankAccModel