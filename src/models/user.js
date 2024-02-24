const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "username is required"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: "Please enter your valid email",
      },
    },
    password: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(v);
        },
        message: "Password must be 1 lowercase 1 uppercase 1 special character at least one digit and minimum 6 character",
      },
      required: [true, "User password is required"],
    },
    image: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "User phone is required"],
      validate: {
        validator: function (v) {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(v);
        },
        message: "Please give bangladesh phon number",
      },
    },
    otp: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false
    },
    
  },
  { timestamps: true }
);

const User = model("Users", userSchema);

module.exports = User;
