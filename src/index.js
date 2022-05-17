import ReactDOM from "react-dom";
import { useEffect } from "react";

// Toastify 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const greeting = () => toast("Welcome to the big reset");
    
    useEffect(()=>{
        greeting()
    });

    const buttonText = { text: 'Print more money' };
    const buttonStyle = {
        display: "flex",
        margin: "20vh auto",
        padding: "15px 25px",

        border: "0",
        color: "white",
        cursor: 'pointer',
        backgroundColor: "green",
        boxShadow: "0 2px 3px rgba(0,0,0,0.16), 0 2px 3px rgba(0,0,0,0.23)"
    };

    return (
        <div>
            <button style={ buttonStyle }>
                { buttonText.text }
            </button>
            <ToastContainer 
                position="top-center"
                autoClose={1500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));