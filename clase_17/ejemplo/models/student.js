import { Schema, model } from 'mongoose';

const studentCollection = 'students';

const studentSchema = new Schema({
  first_name: { type: String },
  last_name: String,
  email: String,
  gender: String,
  courses: {
    type: [
      {
        course: { type: Schema.Types.ObjectId, ref: 'courses' }
      }
    ],
    default: []
  }
})

studentSchema.pre('findOne', function () {
  this.populate('courses.course');
})

studentSchema.pre('find', function() {
  this.limit(10)
})

const studentModel = model(studentCollection, studentSchema);

export default studentModel;