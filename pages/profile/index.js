import axios from "axios";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { authContext } from "../../contexts/auth";

const Dashboard = () => {
    let { setAuthenticated } = useContext(authContext)

    const deleteCookie = async () => {
        // document.cookie = 'login=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
        let res = await axios({
            url: 'http://localhost:3000/api/deletecookie',
            method: 'DELETE'
        })
        if (res.status == 200) {
            setAuthenticated(false)
        }
    }

    useEffect(() => {
        setAuthenticated(true)
    }, [])

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className="text-3xl">Profile Page</div>
            <button className="p-2 mt-2 text-xl shadow-md bg-green-200" onClick={deleteCookie}>
                Log out
            </button>
        </div>
    );
}

export default Dashboard;