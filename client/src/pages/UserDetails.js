const UserDetails = ({ user }) => {
  console.log(user)

  return (
    <div>
      <h1>Welcome {user.email}</h1>
    </div>
  )
}
export default UserDetails
