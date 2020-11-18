import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    address: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
    startDate: { type: String, required: true },
    daysOpen: { type: Number, required: true },
    isOpen: { type: Boolean, default: false },
    tags: { type: Array },
    img: { type: String },
    description: { type: String },
    creatorId: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Listing.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Listing

//       "latitude": 40.7041,
//       "longitude": -73.9867,
//       "address": "20 Jay St, Brooklyn, New York, NY 11201 USA",