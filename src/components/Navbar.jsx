import React, { useContext } from 'react';
//import Logo from '../assets/logo.png';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = ({openNav, setOpenNav}) => {

 

    /*const handleFileChange = (file) => {
        const curUser = auth.currentUser
        const photoURL = URL.createObjectURL(file);
        console.log(photoURL)
        if (curUser) {
            updateProfile(curUser, {
                photoURL: photoURL
            }).then(() => {
                console.log('Photo URL updated successfully');
            }).catch((error) => {
                console.error('Error updating photo URL:', error);
            });
        }
    }*/

    return (
        <nav className={`flex flex-col items-center justify-center gap-16 fixed md:absolute ${openNav ? 'top-0': 'top-[-150%]'} left-0 h-[100vh] w-full bg-[#000] text-[#fff] font-bold tracking-wide transition-all duration-500 ease-in-out md:flex-row md:justify-between md:p-4 md:h-[unset] md:top-0 md:gap-0 z-50 md:px-10`}>
            <div className='md:hidden'>
                <button className='text-4xl text-[white] absolute top-6 right-4' onClick={() => setOpenNav(!openNav)}>
                    <IoCloseSharp />
                </button>
            </div>
            <div className='w-[150px]'>
                <Link to={'/'} onClick={() => setOpenNav(!openNav)}>
                 <strong>   <h1>CPS Prime 4.0</h1></strong>
                </Link>
            </div>
            <ul className='flex flex-col items-center gap-4 font-allotrix-font px-6 py-4 rounded-xl md:flex-row md:gap-10 md:py-3 md:px-8 md:h-[55px]'>
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/" onClick={() => setOpenNav(!openNav)}>Home</Link>
                </li>
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/committees" onClick={() => setOpenNav(!openNav)}>Committees</Link> 
                </li> 
                {/*<li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="https://drive.google.com/drive/folders/1qiz8caGgf-br03Ym4AorA01VFLrb88iA?usp=sharing" onClick={() => setOpenNav(!openNav)}>BG Guides</Link> 
                </li> */}
                {/*<li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="https://drive.google.com/drive/folders/1dOdsXWf1OtZIVXsL33DSo4rc2djx7BrI"
                    onClick={() => setOpenNav(!openNav)}>Agendas</Link> 
                </li>  */}

                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/agendas" onClick={() => setOpenNav(!openNav)}>Agendas</Link> 
                </li> 
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/ocmembers" onClick={() => setOpenNav(!openNav)}>OC Members</Link> 
                </li>
                <li className='hover:pb-2 transition-all duration-300 ease-out hover:text-allotrix-std'>
                    <Link to="/contact" onClick={() => setOpenNav(!openNav)}>Contact</Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar;