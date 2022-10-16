import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "/Footer"

export default function App() {
    return (
    <div>
        <Header />
        App Stuff
        <Footer />
    </div>
    )
}

ReactDOM.render(
<App /> , 
document.getElementById("root")
)