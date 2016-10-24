var Signup = (props) => {

    return (
      <div>
      <div id="SignUp">
        <form>
          <h2>Welcome</h2>
          <input placeholder="what's your name?" id="newUsername" />
          <input placeholder="password" id="newPassword" />
          <button className="signupButton" type="button">register</button>
          <br></br>
          <button className="signupButton" type="button">Log In</button>
        </form>
      </div>
      </div>
      )
  }
window.Signup = Signup;