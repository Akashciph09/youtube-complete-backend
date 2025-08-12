import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authoization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unathorized request");
    }

    /*jwt.verify() is the function from the jsonwebtoken library that both:

Validates the JWT’s signature using the secret or public key you give it.

This ensures the token wasn’t modified after being created.

Decodes the payload if the signature is valid (and the token hasn’t expired).
*/

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    //req.user = user is  basically attaching the logged-in user’s data to the req object, so that other middleware or route handlers down the chain can access it without having to fetch it from the database again.
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
