// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      data,
      config,
      [config.storageAccessKeyName]: data[config.storageAccessKeyName],
      [config.storageRefreshKeyName]: data[config.storageRefreshKeyName]
    })
    // ** Add to user, accessToken & refreshToken to localStorage
    localStorage.setItem('userData', JSON.stringify(data))
    localStorage.setItem(config.storageAccessKeyName, data.access)
    localStorage.setItem(config.storageRefreshKeyName, data.refresh)
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      [config.storageAccessKeyName]: null,
      [config.storageRefreshKeyName]: null
    })

    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.removeItem('userData')
    localStorage.removeItem(config.storageAccessKeyName)
    localStorage.removeItem(config.storageRefreshKeyName)
  }
}
