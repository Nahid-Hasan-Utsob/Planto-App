import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-700">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center max-w-md w-full">
        <SignedOut>
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to Planto.</h1>
          <p className="text-white/80 mb-8">লগইন করে কেনাকাটা শুরু করো</p>
          <SignInButton mode="modal">
            <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition">
              লগইন করো
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <h1 className="text-3xl font-bold text-white mb-4">স্বাগতম!</h1>
          <div className="flex justify-center mb-6">
            <UserButton afterSignOutUrl="/" />
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700"
          >
            হোমে যাও
          </button>
        </SignedIn>
      </div>
    </div>
  )
}