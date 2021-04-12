import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  // the ? is checking if some internal property exists or not.
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  try{
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!); // the ! tells the typescript not to worry about it.
    res.send({ currentUser: payload });
  }
  catch (err) {
    res.send({ currentUser: null });
  }
 
});

export { router as currentUserRouter };
