const LogOut = ({setIsLoggedIn}) => {

    const logOutHandler = () => {
        console.log("You are logging out")
        setIsLoggedIn(false)
    }
  return (
    <>
      <div>Log Out</div>
      <button type="button" onClick={logOutHandler}>LOGOUT</button>
    </>
  )
}

export default LogOut
