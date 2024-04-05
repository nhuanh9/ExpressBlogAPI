import express, {json} from "express";
import {AppDataSource} from "./src/configuration/data-source";
import {api} from "./src/api/api";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors())

AppDataSource.initialize().then(() => {
    console.log('Connect Database Success!');
});

app.use(api);
app.listen(3000, () => {
    console.log(`Server is running: 3000`);
});