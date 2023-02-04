import { Schema, model } from "mongoose";

const studentCollection = "students";

const studentSchema = new Schema(
  {
    first_name: { type: String },
    last_name: String,
    email: String,
    gender: String,
    courses: [
      {
        course: {
          type: Schema.Types.ObjectId,
          ref: "courses",
        },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// studentSchema.pre('findOne', function () {
//   this.populate('courses.course');
// })

studentSchema.pre("find", function () {
  this.limit(10);
});

const studentModel = model(studentCollection, studentSchema);

export default studentModel;
