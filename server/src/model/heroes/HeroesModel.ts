import mongoose, { Schema, model } from 'mongoose';

interface Heroes{
  userId: mongoose.Schema.Types.ObjectId;
  name: string,
  imgURL: string,
  rating: number,

}
export const heroesSchema = new Schema<Heroes>({
  userId: { 
    type: Schema.Types.ObjectId,
    ref: "Auth",
    required: true
},
    name: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        default: ""
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
}, { timestamps: true });

export const HeroesModel = model<Heroes>("Heroes", heroesSchema);
