import React from 'react'
import Footer from '../Generales/Footer'
import Header from '../Generales/Header'
import Titulo from '../Generales/Titulo'


const Login = () => {
    return (
        <>
            <Header />
            <form className=" container col-lg-6 d-flex position-absolute top-50 start-50 translate-middle justify-content-center my-4 rounded">
                <div className="row d-flex flex-column ">
                    <Titulo nombre="User Login" />
                    <div class="mb-3 ">
                        <label for="usuario" class="form-label">Email address</label>
                        <input type="email" class="form-control w-80" id="usuario" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="InputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control w-80" id="InputPassword" />
                    </div>
                    <div id="emailHelp" class="form-text">Ingresar con tu cuenta por Gmail.</div>
                    <div className=" d-md-flex ml-3">

                        <button className="w-50 rounded-pill m-2">Ingresar</button>

                        <button className="w-50 rounded-pill m-2">Gmail</button>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}

export default Login;