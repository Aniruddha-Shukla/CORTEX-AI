import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import React, { useEffect, useRef } from 'react'
import { auth } from '../../utils/firebase'
import api from '../../utils/axios'
import { useDispatch, useSelector } from 'react-redux';
import { setUserdata } from '../redux/userSlice';
import SideBar from '../components/SideBar';
import ChatArea from '../components/ChatArea';
import Artifact from '../components/Artifact';

const GOOGLE_CLIENT_ID = "907832663312-ol60da3ljconulkspfekkh6n46b9f57c.apps.googleusercontent.com"

function Home() {
    const { userData } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const googleButtonRef = useRef(null)

    const handleLogin = async (token) => {
        try {
            const { data } = await api.post("/api/auth/login", { token })
            dispatch(setUserdata(data))
        } catch (error) {
            console.log(error)
            alert("Backend login failed: " + (error?.response?.status || error?.message || "unknown error"))
        }
    }

    const handleCredentialResponse = async (response) => {
        alert("Google callback fired. Credential received: " + (response?.credential ? "YES" : "NO"))
        try {
            const credential = GoogleAuthProvider.credential(response.credential)
            const result = await signInWithCredential(auth, credential)
            const token = await result.user.getIdToken()
            alert("Firebase sign-in succeeded, sending token to backend...")
            await handleLogin(token)
        } catch (error) {
            console.log("google sign-in error", error)
            alert("Google sign-in failed: " + (error?.code || error?.message || "unknown error"))
        }
    }

    useEffect(() => {
        if (userData) return

        const initGoogleButton = () => {
            if (!window.google?.accounts?.id || !googleButtonRef.current) return
            window.google.accounts.id.initialize({
                client_id: GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse
            })
            googleButtonRef.current.innerHTML = ""
            window.google.accounts.id.renderButton(googleButtonRef.current, {
                theme: "outline",
                size: "large",
                shape: "pill",
                width: 292
            })
        }

        if (window.google?.accounts?.id) {
            initGoogleButton()
            return
        }

        const script = document.querySelector('script[src="https://accounts.google.com/gsi/client"]')
        if (script) {
            script.addEventListener("load", initGoogleButton)
            return () => script.removeEventListener("load", initGoogleButton)
        }
    }, [userData])

    return (
        <div className='h-screen  flex bg-[#0d0f14] text-white overflow-hidden'>

            <SideBar />
            <ChatArea />
            <Artifact />




            {!userData && <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur'>
                <div className='w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-[17px] font-semibold text-slate-100 tracking-tight'>Welcome to CortexAI</h2>
                        <p className='text-[13px] text-slate-500'>Please login to continue using the app.</p>
                    </div>

                    <div ref={googleButtonRef} className='flex justify-center' />
                </div>
            </div>}

        </div>
    )
}

export default Home