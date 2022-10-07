import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getSingleHotel,
  updateHotel,
} from "../controllers/hotels.js";

const router = express.Router();

//Create
router.post("/", createHotel);
//Update
router.put("/:id", updateHotel);
//Delete
router.delete("/:id", deleteHotel);
//Get
router.get("/:id", getSingleHotel);
//Get All
router.get("/", getAllHotels);
export default router;
