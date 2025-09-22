import express from "express";
import cors from "cors";
import mainRoutes from "./routes/mainRoutes.mjs";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.use('/', mainRoutes);

try {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
} catch (error) {
    console.error(error.message);
}
