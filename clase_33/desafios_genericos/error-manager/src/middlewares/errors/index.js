import ErrorList from '../../services/enums.js';

export default (error, req, res, next) => {
  console.log(error.cause)
  
  switch(error.code) {
    case ErrorList.INVALID_TYPE_ERROR:
      res.send({ status: 'Error', payload: error.name })
      break;

    case ErrorList.INVALID_PARAMS:
      res.send({ status: 'Error', payload: error.name })
      break;

    default:
      res.send({ status: 'Error', payload: 'Unhandled error' })
      break;
  }

}