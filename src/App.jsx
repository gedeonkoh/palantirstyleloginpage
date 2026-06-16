import { useState } from 'react'
import './App.css'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setShowPassword(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    alert('Authentication initiated. Welcome to the network.')
  }

  return (
    <div className="min-h-screen grid-bg relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="absolute inset-0 particle-field pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full py-6 px-8 border-b border-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center">
                  <div className="w-6 h-6 border border-cyan-400/70 transform rotate-45" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-light tracking-[0.2em] text-slate-100">
                PALANTIR
              </span>
            </div>
            <nav className="flex items-center gap-6 text-xs font-medium tracking-wider text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Platform</a>
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Solutions</a>
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Company</a>
            </nav>
          </div>
        </header>

        {/* Login section */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            {/* Login card */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-sm before:scan-line">
              {/* Corner accents */}
              <div className="corner-accent corner-tl" />
              <div className="corner-accent corner-tr" />
              <div className="corner-accent corner-bl" />
              <div className="corner-accent corner-br" />

              {/* Card content */}
              <div className="relative p-8 md:p-10">
                {/* Status indicator */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-1.5 bg-slate-800/90 border border-slate-600/50 rounded-full">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400">
                    Secure Channel
                  </span>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-light text-slate-100 tracking-wide mb-2">
                    Authorized Access Only
                  </h1>
                  <p className="text-sm text-slate-500 font-mono">
                    // Authentication required for network entry
                  </p>
                </div>

                {/* Divider line */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
                </div>

                {/* Login form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M16 12H8m8 0l-4-4m4 4-4 4M8 12l4-4m-4 4 4 4" />
                      </svg>
                      Identity
                    </label>
                    <div className="relative">
                      <input
                        type="email" id="email" autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="authorized@palantir.com"
                        className="input-focus-glow w-full bg-slate-800/50 border border-slate-600/50 text-slate-100 px-4 py-3.5 font-mono text-sm focus:outline-none transition-all duration-300 placeholder:text-slate-600"
                        required
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500/20" />
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M12 15v2m0-8V5a1 1 0 011-1h0a1 1 0 011 1v2m-6 0h10a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V8a1 1 0 011-1z" />
                      </svg>
                      Clearance
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'} id="password" autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="input-focus-glow w-full bg-slate-800/50 border border-slate-600/50 text-slate-100 px-4 py-3.5 font-mono text-sm focus:outline-none transition-all duration-300 placeholder:text-slate-600"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a9.97 9.97 0 012.122-.232c4.478 0 8.268 2.943 9.543 7a9.953 9.953 0 01-2.26 4.38M15 12l-3-3m0 0l-3 3m3-3v8" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-600 bg-slate-800/50 text-cyan-500 focus:ring-cyan-500/20" />
                      <span className="text-slate-500 hover:text-slate-300 transition-colors">Persistent session</span>
                    </label>
                    <button type="button" onClick={resetForm} className="text-cyan-500/80 hover:text-cyan-400 transition-colors">
                      Reset credentials
                    </a>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 transition-all duration-300 group-hover:from-cyan-500 group-hover:via-cyan-400 group-hover:to-cyan-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-white">
                      {isLoading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Authenticating...</span>
                        </>
                      ) : (
                        <>
                          <span>Establish Link</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-slate-600">
                    Restricted Access • Authorized Personnel Only
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-1 h-1 bg-cyan-500/50 rounded-full" />
                    <div className="w-1 h-1 bg-cyan-500/50 rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-cyan-500/50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500 font-mono">
                <span className="text-cyan-500/70">●</span> System Status: <span className="text-emerald-400">Operational</span>
              </p>
              <p className="text-[10px] text-slate-600 mt-2">
                All access attempts are logged and monitored.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-4 px-8 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] text-slate-600 uppercase tracking-wider">
            <span>© 2026 Palantir Technologies Inc.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}