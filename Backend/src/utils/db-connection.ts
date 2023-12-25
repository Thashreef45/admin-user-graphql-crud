import { connect } from "mongoose";

const connectDb = (dbLink:string) => {

    connect(dbLink).
        then(() => console.log('DB connected')).
        catch(() => console.log('DB Connection Failed'))
}

export default connectDb