import Cliente from "./components/Cliente/Cliente.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
import ClienteAdd from "./components/Cliente/ClienteAdd.jsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (<>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/clientes" element={<Cliente/>}/>
                    <Route path={"/clientes/add"} element={<ClienteAdd/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>)
}

export default App
