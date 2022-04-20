import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import UserPageLoaded from '../components/UserPageLoaded'
import userService from '../services/userService'

const UserPage = () => {
  const [userBalance, setUserBalance] = useState(Number)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    userService
      .getUser(userId)
      .then(res => {
        setUserBalance(res.balance)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      {
        loading
          ? <Loader />
          : <UserPageLoaded balance={userBalance} />
      }
    </>
  )
}

export default UserPage
