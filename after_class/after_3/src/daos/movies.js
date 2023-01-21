import { movieModel } from "../models/movies.model.js";

class MovieDao {
  async getMovies() {
    return await movieModel.find();
  }

  async getMoviesAsc() {
    return await movieModel.find().sort({ title: 1 })
  }

  async getMovieById(id) {
    return await movieModel.findById(id)
  }

  async createMovie(movie) {
    return await movieModel.create(movie)
  }

  async updateMovie(id, movie) {
    return await movieModel.findByIdAndUpdate(id, movie, { new: true })
  }

  async deleteMovie(id) {
    return await movieModel.findByIdAndDelete(id)
  }
}

export default new MovieDao()