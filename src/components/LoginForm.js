import React from 'react'

const LoginForm = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword
}) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
                perse
        <input
          id='usersafdname'
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
                password
        <input
          id='password'
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id='login_butt' type="submit">login</button>
    </form>

  )


}

export default LoginForm