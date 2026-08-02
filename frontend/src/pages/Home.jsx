import { signInWithRedirect, getRedirectResult } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, googleProvider } from '../../utils/firebase'
import api from '../../utils/axios'
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { setUserdata } from '../redux/userSlice';
import SideBar from '../components/SideBar';
import ChatArea from '../components/ChatArea';
import Artifact from '../components/Artifact';

const LOGIN_ATTEMPT_KEY = "cortexai_login_attempt"

function Home() {
    const { userData } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [checkingRedirect, setCheckingRedirect] = useState(true)

    const handleLogin = async (token) => {
        try {
            const { data } = await api.post("/api/auth/login", { token })
            dispatch(setUserdata(data))
        } catch (error) {
            console.log(error)
            alert("Login failed while contacting the server. Please try again.")
        }
    }

    useEffect(() => {
        const wasAttemptingLogin = sessionStorage.getItem(LOGIN_ATTEMPT_KEY) === "1"

        const completeRedirectLogin = async () => {
            try {
                const result = await getRedirectResult(auth)

                if (result?.user) {
                    sessionStorage.removeItem(LOGIN_ATTEMPT_KEY)
                    const token = await result.user.getIdToken()
                    await handleLogin(token)
                } else if (wasAttemptingLogin) {
                    // We came back from Google, but Firebase couldn't retrieve the
                    // sign-in result. This almost always means the browser blocked
                    // the storage Firebase needs to complete the flow.
                    sessionStorage.removeItem(LOGIN_ATTEMPT_KEY)
                    alert(
                        "Sign-in didn't complete. This usually happens when Private/Incognito mode is on, " +
                        "or when your browser blocks cross-site tracking/cookies. " +
                        "Please try again in a normal (non-private) browser tab, and if you're on iPhone, " +
                        "go to Settings > Safari and turn OFF 'Prevent Cross-Site Tracking', then retry."
                    )
                }
            } catch (error) {
                sessionStorage.removeItem(LOGIN_ATTEMPT_KEY)
                console.log("redirect login error", error)
                if (error?.code === "auth/unauthorized-domain") {
                    alert("This domain is not authorized for sign-in. Please contact support.")
                } else if (error?.code) {
                    alert(`Sign-in failed: ${error.code}`)
                }
            } finally {
                setCheckingRedirect(false)
            }
        }
        completeRedirectLogin()
    }, [])

    const googleLogin = async () => {
        try {
            sessionStorage.setItem(LOGIN_ATTEMPT_KEY, "1")
            await signInWithRedirect(auth, googleProvider)
        } catch (error) {
            sessionStorage.removeItem(LOGIN_ATTEMPT_KEY)
            console.log("could not start sign-in", error)
            alert("Could not open Google sign-in. If you're opening this link inside WhatsApp, Instagram, or another app, please open it in your browser (Chrome or Safari) instead.")
        }
    }

    return (
        <div className='h-screen  flex bg-[#0d0f14] text-white overflow-hidden'>

            <SideBar />
            <ChatArea />
            <Artifact />




            {!userData && !checkingRedirect && <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur'>
                <div className='w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-[17px] font-semibold text-slate-100 tracking-tight'>Welcome to CortexAI</h2>
                        <p className='text-[13px] text-slate-500'>Please login to continue using the app.</p>
                    </div>

                    <button className='w-full flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-black/90 bg-white hover:bg-gray-200  transition-all duration-150 cursor-pointer' onClick={googleLogin}>
                        <FcGoogle size={15} />
                        Continue With Google
                    </button>
                </div>
            </div>}

        </div>
    )
}

export default Home