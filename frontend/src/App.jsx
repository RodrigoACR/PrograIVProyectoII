import ClienteList from "./components/Cliente/ClienteList.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
import Cliente from "./components/Cliente/Cliente.jsx";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (<>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/main" element={<Main/>}></Route>
                    <Route path="/clientes" element={<ClienteList/>}></Route>
                    <Route path="/clientes/add" element={<Cliente/>}></Route>
                    <Route path="/clientes/view/:id" element={<Cliente/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>)
}

export default App
