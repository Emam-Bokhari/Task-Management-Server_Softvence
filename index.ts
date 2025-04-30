import { connectDB } from "./src/config/db.config"

import config from "./src/config";
import app from "./src/app";

async function main() {
    try {
        connectDB();
        app.listen(config.port, () => {
            console.log(`Server is running on port: ${config.port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main();