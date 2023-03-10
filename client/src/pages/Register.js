import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div className="flex">
      <div className="reviewForm">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="rounded-input"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Username"
              value={formValues.name}
              required
            />
          </div>
          <div>
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

          <div>
            <input
              placeholder="Password"
              className="rounded-input"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              placeholder="Confirm Password"
              className="rounded-input"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="registerButton"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
