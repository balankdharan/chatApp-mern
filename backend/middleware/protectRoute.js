import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized -No Token" });
    }

    const decoded = jwt.verify(token, process.env.JWTSECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User Not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: "Internal error" });
  }
};

export default protectRoute;
