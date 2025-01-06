import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify"
import product_img from '../assets/products/products.js'

export const PageContext = createContext();

const PageContextProvider = (props) => {

    const currency = "₹"

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate();

    const [login, setLogin] = useState(false)
    const [orderConfirm, setOrderConfirm] = useState(false)
    const [cart, setCart] = useState([])
    const [order, setOrder] = useState({
        name : "",
        empNum : "",
        email : "",
        phoneno : "",
        billNumber : "",
        cart : [],
        bankIfsc : "ESMF0001924",
        bankName : "ESAF Bank",
        bankLogo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
        address : "Thiruvanmiyur",
        remark : ""
    })
    const [branchInfo, setBranchInfo] = useState({})

    const newOrder = async () => {
        try {
            const response = await axios.post(backendUrl+"/api/order/new", { order })

            if(response.data.success){
                toast.success("Order Placed Successfully")
                setCart([])
            }else {
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
                        ? { ...cartItem, qty: Number(cartItem.qty+qty[cartItem.name]), totalAmt: cartItem.totalAmt+(qty[cartItem.name]*item.price) }
                        : cartItem
                );
            } else {
                return [...prevCart, { name: item.name, img: item.img, qty: qty[item.name], price: item.price, totalAmt: qty[item.name]*item.price }];
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

    const products = [
        {name: "Dater", img: product_img.cash_received_dater, price: 260},
        {name: "Mini Dater", img: product_img.cleared_seal_dater, price: 70},
        {name: "Approval", img: product_img.seal_authorized, price: 70},
        {name: "Paid", img: product_img.cash_paid_dater, price: 70},
        {name: "Decline", img: product_img.round_seal, price: 70},
        {name: "Fake Note", img: product_img.transfer_seal, price: 70},
        {name: "Number", img: product_img.number_seal, price: 70},
        {name: "Locker", img: product_img.seal_branch_manager, price: 70},
    ]

    // useEffect(()=>{
    //     console.log(cart)
    // },[cart])

    const value = {
        backendUrl,
        navigate,
        login, setLogin,
        branchInfo, setBranchInfo,
        products,
        cart, addToCart, decrementQty, incrementQty, removeFromCart, setCart,
        order, setOrder, newOrder,
        orderConfirm, setOrderConfirm, 
        currency
    }

    return (
        <PageContext.Provider value={value}>
            {props.children}
        </PageContext.Provider>
    )

}

export default PageContextProvider