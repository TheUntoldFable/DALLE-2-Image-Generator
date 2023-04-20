import mongoose from "mongoose";

const connectDB = (url: string | undefined) => {
   if(!url) return
   console.log('Connecting to DB...')
   mongoose.set('strictQuery', true)
   mongoose.connect(url).
        then(() => console.log('*** Connection to DB created. ***'))
            .catch(e => console.log(e, '*** Error while connecting to DB ***'))
}

export default connectDB