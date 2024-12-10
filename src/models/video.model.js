import mongoose, {Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate'

const videoSchema = new Schema({
    videoFile: {
        type: String,//cloudinary url
        required: [true, "Video is required"]
    },
    thumbNail: {
        type: String,
        required: [true, "Thumbnail is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate) //with this you can write aggregation queries

export const Video = mongoose.model("Video", videoSchema)