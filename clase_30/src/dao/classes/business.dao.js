import businessModel from '../models/business.model.js';

export default class Business {
  getBusiness = async () => {
    try {
      const business = await businessModel.find();
      return business;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getBusinessById = async (id) => {
    try {
      const business = await businessModel.findOne({ _id: id });
      return business;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  createBusiness = async (business) => {
    try {
      const newBusiness = await businessModel.create(business);
      return newBusiness;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  updateBusiness = async (id, business) => {
    try {
      const business = await businessModel.findByIdAndUpdate({_id: id}, {$set: business})
      return business;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}