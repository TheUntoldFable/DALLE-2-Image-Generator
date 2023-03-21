import mongoose from "mongoose";

const connectDB = (url: string | undefined) => {
    if(!url) return
   mongoose.set('strictQuery', true)
   mongoose.connect(url).
        then(() => console.log('*** Connection to DB created. ***'))
            .catch(e => console.log(e, '*** Error while connectinc to db ***'))
}

export default connectDB