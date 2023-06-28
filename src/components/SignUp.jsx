import { useState } from "react";
// import { Link } from "react-router-dom";
export default function SignUp() {
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        receiveEmail: true,
        agreeTerms: false
    });
    const [passwordMessage, setPasswordMessage] = useState(""); 
        
    function handleFormChange(event) {
        setPasswordMessage("");
        const {name, value, type, checked} = event.target;

        setSignupData(prevSignupData => {
            return {
                ...prevSignupData,
                [name]: type=== "checkbox" ? checked : value
            }
        });    
        
        console.log(signupData);
    }

    function submitSignupData(event) {
        event.preventDefault();
        if(signupData.password !== signupData.confirmPassword) {
            setPasswordMessage("Passwords do not match");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-black/30">
            <form className="flex flex-col w-[30%] md:w-[75%] m-4 h-fit rounded-md bg-white p-4" onSubmit={submitSignupData}>
                <input 
                    className="p-2 m-2 border-b-2 border-blue-200 outline-none"
                    type="text"
                    placeholder="First name"
                    onChange={handleFormChange}
                    name="firstName"
                    value={signupData.firstName}
                />
                <input
                    className="p-2 m-2 border-2 rounded-md border-blue-200"
                    type="text"
                    placeholder="Last name"
                    onChange={handleFormChange}
                    name="lastName"
                    value={signupData.lastName}
                />
                <input
                    className="p-2 m-2 border-2 rounded-md border-blue-200"
                    type="email"
                    placeholder="Email address"
                    onChange={handleFormChange}
                    name="email"
                    value={signupData.email}
                />
                <input
                    className="p-2 m-2 border-2 rounded-md border-blue-200"
                    type="tel"
                    placeholder="Phone Number"
                    onChange={handleFormChange}
                    name="lastName"
                    value={signupData.phoneNumber}
                />
                <input
                    className="p-2 m-2 border-2 rounded-md border-blue-200"
                    type="password"
                    placeholder="Password"
                    onChange={handleFormChange}
                    name="password"
                    value={signupData.password}
                />
                <input
                    className="p-2 m-2 border-2 rounded-md border-blue-200"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleFormChange}
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                />
                {passwordMessage !== "" && <p className="text-red-500">{ passwordMessage }</p>}
                <div className="p-2 space-x-2">
                    <input
                        className="border-2 rounded-md border-blue-200"
                        type="checkbox"
                        onChange={handleFormChange}
                        name="receiveEmail"
                        checked={signupData.receiveEmail}
                    />
                    <label htmlFor="receiveEmail">Receive Regular Email Updates</label>
                </div>
                <div className="p-2 space-x-2">
                    <input
                        className="border-2 rounded-md border-blue-200"
                        type="checkbox"
                        onChange={handleFormChange}
                        name="agreeTerms"
                        checked={signupData.agreeTerms}
                    />
                    <label htmlFor="agreeTerms">I Agree To Terms And Conditions</label>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-black text-white p-2 px-4 w-fit rounded-full hover:outline-none">
                        Sign Up
                    </button>
                    <p>Already have an account?<a href="#" className="text-blue-900 underline">Log In</a></p>
                </div>
                
            </form>
        </div>
        )
    }