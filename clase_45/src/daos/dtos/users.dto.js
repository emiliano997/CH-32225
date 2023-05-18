class UserDto {
  constructor(user) {
    this.username = user.username
    this.email = user.email
    this.password = user.password
  }

}

export default UserDto;