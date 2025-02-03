import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify"
import product_img from '../assets/products/products.js'
import { getProducts } from "../utils/bankHandler.jsx";
import { MdBrandingWatermark } from "react-icons/md";

export const PageContext = createContext();

const PageContextProvider = (props) => {

    const currency = "₹"

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();

    const [login, setLogin] = useState(false)
    const [orderConfirm, setOrderConfirm] = useState(false)
    const [cart, setCart] = useState([])
    const [oneBranchOrder, setOneBranchOrder] = useState([])
    const [order, setOrder] = useState({
        name: "",
        empNum: "",
        email: "",
        phoneno: "",
        billNumber: "",
        cart: [],
        bankIfsc: "ESMF0001924",
        bankName: "ESAF Bank",
        bankLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
        address: "Thiruvanmiyur",
        remark: "",
        location: "",
        state: 0,
    })
    const [branchInfo, setBranchInfo] = useState({})

    const [managerData, setManagerData] = useState({
        ESAF: {
          manager28: "NATHAN",
          empno28: "12859",
          manager29: "NATHANS",
          manager30: "NATHANSCHWARTZ",
          empno30: "12859",
        },
        CSB : {
          manager2: "A. BABITHA RAHMAN",
          empno2: "89479"
        },
        Federal : {
            
        }
      });

    const getBranchInfo = async () => {
        try {
            const branchName = localStorage.getItem("branchName");
            // console.log(branchName)
            const response = await axios.post(backendUrl + "/api/bankAcc/getbankinfo", { branchName })
            // console.log(response)
            if (response.data.success) {
                await setBranchInfo(response.data.branchInfo)
            }
            else {
                console.log(response.data.message)
                toast.error("Couldn't load branch infomation!")
            }
        } catch (err) {
            console.log(err)
            toast.error("Couldn't load branch information!")
        }

    }

    const newOrder = async () => {
        try {
            const response = await axios.post(backendUrl + "/api/order/new", { order })

            if (response.data.success) {
                toast.success("Order Placed Successfully")
                setCart([])
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    const loadOneBranchOrder = async () => {
        try{
            const branchName = localStorage.getItem("branchName");
            const bankName = branchInfo.bankName

            const response = await axios.post(backendUrl + "/api/order/oneBranch", {branchName, bankName})
            console.log(response.data)
            if (response.data.success) {
                // toast.success("Previous Order Information loaded Successfully")
                setOneBranchOrder(response.data.orders)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    const updateOrderState = async(_id) => {
        try {
            const response = await axios.post(backendUrl + "/api/order/stateUpdate", {_id, state:role })
            if (response.data.success) {
                toast.success("Order Updated Successfully")
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }
    const addToCart = (item, qty) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, qty: Number(cartItem.qty + qty[cartItem.name]), totalAmt: cartItem.totalAmt + (qty[cartItem.name] * item.price) }
                        : cartItem
                );
            } else {
                return [...prevCart, { name: item.name, img: item.img, qty: qty[item.name], price: item.price, totalAmt: qty[item.name] * item.price }];
            }
        });
        toast.success(`${item.name} Added To Cart`, {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const incrementQty = (itemName) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.name === itemName
                    ? { ...cartItem, qty: cartItem.qty + 1 }
                    : cartItem
            )
        );
    };

    const decrementQty = (itemName) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.name === itemName && cartItem.qty > 1
                    ? { ...cartItem, qty: cartItem.qty - 1 }
                    : cartItem
            ).filter((cartItem) => cartItem.qty > 0)
        );
    };

    const removeFromCart = (itemName) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== itemName));
    };


    const products = getProducts(branchInfo.bankName)

    // useEffect(()=>{
    //     console.log(cart)
    // },[cart])
   

    const [role, setRole] = useState("");

    const value = {
        backendUrl,
        navigate,
        login, setLogin,
        branchInfo, setBranchInfo, getBranchInfo,
        products,
        cart, addToCart, decrementQty, incrementQty, removeFromCart, setCart,
        order, setOrder, newOrder,
        orderConfirm, setOrderConfirm,
        currency,
        oneBranchOrder, loadOneBranchOrder,
        managerData, setManagerData,
        role, setRole,
        updateOrderState
    }

    return (
        <PageContext.Provider value={value}>
            {props.children}
        </PageContext.Provider>
    )

}

export default PageContextProvider