import Link from 'next/link'
import { useContext } from 'react';
import { authContext } from '@contexts/auth';

const Navbar = () => {
    let { authenticated, setAuthenticated } = useContext(authContext)

    const changeCookie = () => {
        setAuthenticated(!authenticated)
    }

    return (
        <div className="w-full h-14 my-2 flex justify-between items-center shadow-md sticky top-0 bg-white">
            <div onClick={changeCookie} className="p-2 ml-4 bg-green-300 hover:bg-green-400 rounded-lg cursor-pointer sticky duration-100">
                Change current context value
            </div>
            <div className='flex flex-row'>
                <div className="p-2 mr-4 bg-green-300 hover:bg-green-400 rounded-lg cursor-pointer sticky duration-100">
                    <Link href='/dashboard'>
                        Set Cookie
                    </Link>
                </div>
                <div className="p-2 mr-4 bg-green-300 hover:bg-green-400 rounded-lg cursor-pointer sticky duration-100">
                    <Link href='/new'>
                        Add new todo
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;