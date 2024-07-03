import { app } from "./server";
import 'dotenv/config';

app.listen(process.env.PORT || 3333, () => {
     console.log(`running on port ${process.env.PORT}`)
});