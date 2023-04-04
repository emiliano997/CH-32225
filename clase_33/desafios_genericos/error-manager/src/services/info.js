export const generateUserError = (user) => {
  return `One or more properties were incomplete or not valid.
  List of required properties:
  * first_name: needs to be a string, recieved ${user.first_name}
  * last_name: needs to be a string, recieved ${user.last_name}
  * email: needs to be a string, recieved ${user.email}`
}

export const paramError = (param) => {
  return `One propertie was not valid.
  List of required properties:
  * Id: needs to be a number, recieved ${param}`
}