import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from '../utils/apis/Usuarios';
import { useUser } from '../context/userContext';



const PrivateLayaut = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } =
    useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {


      // 1.
      setLoadingUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion`,
      });
      // 2.
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
      // 3. 
      await obtenerDatosUsuario(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log('err', err);
          setLoadingUserInformation(false);
          logout({ returnTo: "https://evening-springs-30883.herokuapp.com/Admin" });
          
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  if (isLoading || loadingUserInformation)
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading className="" type='spinningBubbles' color='#231942' height={400} width={250} />
      </div>
    );


  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return (
    <div className='flex w-auto h-auto'>
      <div className='flex flex-col w-full'>
        <Navbar />
        {/* <SidebarResponsive /> */}
        <main className='flex w-full h-full items-center justify-center'>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default PrivateLayaut;






















//     const { user, isAuthenticated, isLoading, getAccessTokenSilently  } = useAuth0();
//     return (
//         <PrivateRoute>
//         <div className="flex flex-col justify-between h-screen">
//         <Navbar/>   
//             <main className="h-full overflow-y-scroll">{children}</main>
//             <Footer/>
//         </div>
//         </PrivateRoute>
//     );
// };

// export default PrivateLayaut;