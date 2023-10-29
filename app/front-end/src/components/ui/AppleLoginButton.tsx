import * as React from 'react'

import AppleLogin from 'react-apple-login'

// class AppleLoginButton extends React.Component {
//   render () {
//     return (
//       <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
//     )
//   }
// }

const AppleLoginButton = () => {
  return (
    <AppleLogin
      clientId="com.react.apple.login"
      redirectURI="https://redirectUrl.com"
      scope="email name"
      responseType="code id_token"
      responseMode="form_post"
      usePopup={false}
      render={(props) => <button onClick={props.onClick}>Apple Login</button>}
      // onSuccess={(response) => console.log(response)}
      // onFailure={(error) => console.log(error)}
    />
  )
}

export default AppleLoginButton;