"use client"

import { useState, useEffect } from "react"
import DoodleButton from "./DoodleButton"

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShow(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] p-6">
        <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Cookie Policy
        </h3>
        <p className="text-sm mb-4 text-gray-700">
          We use cookies to enhance your browsing experience and analyze site traffic. 
          By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="flex gap-3">
          <DoodleButton size="sm" variant="primary" onClick={acceptCookies}>
            Accept
          </DoodleButton>
          <DoodleButton size="sm" variant="outline" onClick={declineCookies}>
            Decline
          </DoodleButton>
        </div>
      </div>
    </div>
  )
}
