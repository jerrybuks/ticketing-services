import express from "express";


const router = express.Router();

router.post("/api/users/signout", (req, res) => {
       console.log("Hi sign out")
})

export { router as signOutRouter };