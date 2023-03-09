import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Login = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/feed')
  }
  const guestLogin = (e) => {
    e.preventDefault()

    setFormValues({ email: 'guest@guest', password: 'guest' })
    handleSubmit(e)
  }

  return (
    <div className="flex">
      <div className="reviewForm">
        <div className="card-overlay centered">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex">
              <label className="noDec" htmlFor="email"></label>
              <input
                className="rounded-input"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                required
              />
            </div>
            <div className="flex">
              <label className="noDec" htmlFor="password"></label>
              <input
                className="rounded-input"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
            </div>
            <button
              className="signInButton"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <button className="signInButton" onClick={guestLogin}>
              Guest Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
