import { User } from "../modules/user.moduls.js";
import { ApiError } from "../utils/apierror.js";
import validator from "validator";
import ApiResponse from "../utils/apiresponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const generateAccessToken = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    const accessToken = await user.generataccessToken();
    return { accessToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating token");
  }
};

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "User already exists"); // Changed to 409 Conflict
  }

  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Invalid email address");
  }

  if (password.length < 8) {
    throw new ApiError(400, "Password must be at least 8 characters");
  }

  

  const user = await User.create({
    name,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
   console.log(email,password);
  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isPasswordValid = await user.isCorrectPassWord(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  const { accessToken } = await generateAccessToken(user._id);

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        { user: user.toObject({ hide: "password" }), accessToken },
        "Login successful"
      )
    );
});
