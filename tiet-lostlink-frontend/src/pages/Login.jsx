import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.endsWith('@thapar.edu')) {
      setError('Use your institutional @thapar.edu email to continue.')
      return
    }
    setError('')
    onLogin(email)
    navigate('/feed')
  }

  return (
    <div className="page page--narrow">
      <div className="login-card">
        <p className="eyebrow">TIET LostLink</p>
        <h1 className="title">Report it. Search it. Get it back.</h1>
        <p className="lede">
          Log in with your institute email to report a lost or found item, search active
          reports, and track claims.
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
          <div className="field">
            <label htmlFor="email">Institutional email</label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="yourname@thapar.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && (
            <p style={{ color: 'var(--lost)', fontSize: 13, marginTop: 10 }}>{error}</p>
          )}
          <button type="submit" className="btn btn--primary btn--block" style={{ marginTop: 18 }}>
            Continue
          </button>
        </form>
        <p className="divider-note">Only verified TIET students can report or claim items.</p>
      </div>
    </div>
  )
}
