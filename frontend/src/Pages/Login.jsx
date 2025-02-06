import React, { useContext, useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import logo from "../assets/logo.png"
import { PageContext } from "../context/PageContext";
import axios from "axios"
import { toast } from "react-toastify";

const Login = () => {

  const { backendUrl, navigate, login, setLogin, setBranchInfo, branchInfo, setRole } = useContext(PageContext)

  const [branchName, setBranchName] = useState("")
  const [password, setPassword] = useState("")
  const [rolepwd, setRolepwd] = useState ("")

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/bankAcc/login", {
        branchName,
        password,
        roleOption,
        rolepwd
      })
      if (response.data.success) {
        await setLogin(response.data.success)
        await setBranchInfo(response.data.branchInfo)
        await setRole(roleOption)
        localStorage.setItem('login', response.data.success)
        localStorage.setItem('branchName', branchName)
        localStorage.setItem('role', roleOption)
      }
      else {
        toast.error(response.data.message)
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (login) {
      if(roleOption == 0)
        navigate("/order")
      else
        navigate('/orders')
    }
    else {
      navigate("/login")
    }
  }, [localStorage.getItem("login")])

  const [roleOption, setRoleOption] = useState('0');
  const roles = ["Employee", "Head of Department", "Procurement Head"]
  const roleOptions = [
    { value: '0', label: 'Employee' },
    { value: '1', label: 'Head of Department' },
    { value: '2', label: 'Procurement Head'}
  ];
  const handleOptionChange = (event) => {
    setRoleOption(event.target.value);
  };

  return (
    <div className="w-100 flex flex-col items-center justify-center mt-4">
      <div>
        <img className="w-48 mb-3" src={logo} alt="LOGO" />
      </div>
      <div className="w-[50%] flex flex-col items-center">
        <MdAccountCircle className="text-[12rem]" />
        <h1 className="mb-3 text-4xl">LOGIN</h1>
        <form onSubmit={e => onSubmitHandler(e)} className="flex flex-col w-[50%] border-2 border-slate-900 px-8 py-16 rounded-lg">
          <input className="border-slate-950 border-2 rounded-xl mb-4 px-3 py-1" value={branchName} onChange={e => setBranchName(e.target.value)} type="text" name="branchName" placeholder="BRANCH NAME" required />
          <input className="border-slate-950 border-2 rounded-xl mb-4 px-3 py-1" value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="PASSWORD" required />

          {roleOptions.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="radio"
                  value={option.value}
                  checked={roleOption === option.value} // Check if this option is selected
                  onChange={handleOptionChange} // Handle change event
                  className = "mt-1"
                />
                  {option.label}
              </label>
            </div>
          ))}
          <input className="border-slate-950 border-2 rounded-xl mt-4 px-3 py-1" value={rolepwd} onChange={e => setRolepwd(e.target.value)} type="password" name="rolepwd" placeholder="ROLE PASSWORD" required />

          <button onClick={e => onSubmitHandler(e)} className="mt-4 border-slate-950 border-2 w-fit self-center py-2 px-6 text-white bg-black flex items-center justify-between">
            LOG IN
            <IoLogInOutline className="text-2xl ml-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
