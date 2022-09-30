import styles from "./log-out.module.css"

const LogOut = () => {

    const logOutHandler = () => {
        console.log("You are logging out")
        // setIsLoggedIn(false)
    }
  return (
    <div className={styles.logOut}>
      <p>Are you sure you want to Log Out?</p>
      <button type="button" onClick={logOutHandler}>LOGOUT</button>
    </div>
  )
}

export default LogOut
