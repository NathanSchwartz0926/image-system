import express from "express"
import cors from "cors"
import 'dotenv/config'
import connetDB from "./config/mongodb.js"
import bankAccRouter from "./routes/bankAccRoute.js"
import adminAccRouter from "./routes/adminAccRoute.js"
import orderRouter from "./routes/orderRoute.js"
import { createCanvas, loadImage } from "canvas";
import path from "path"
import { fileURLToPath } from "url";
import fs from "fs";

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 4000
connetDB()

app.use(express.json())
app.use(cors())

app.use('/api/bankAcc', bankAccRouter)
app.use('/api/admin', adminAccRouter)
app.use('/api/order', orderRouter)

app.get("/", (req, res) => {
    res.send("API WORKING")
})

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    return `${day} ${monthNames[monthIndex]} ${year}`;
}

function getMaxCharWidth(ctx, font) {
    ctx.font = font; // Set the desired font
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // All characters to measure
    let maxWidth = 0;

    // Measure each character and find the maximum width
    for (let char of characters) {
        const charWidth = ctx.measureText(char).width;
        if (charWidth > maxWidth) {
            maxWidth = charWidth;
        }
    }

    return maxWidth; // Return the maximum character width
}

app.get("/api/genImage/get-image-with-date", async (req, res) => {
    try {
        const { branchName, imageName } = req.query;
        if (!imageName) {
            return res.status(400).send("Image name is required.");
        }

        const imagePath = path.join(__dirname, "images", imageName);
        if (!fs.existsSync(imagePath)) {
            return res.status(404).send("Image not found.");
        }
        //console.log(branchName, imagePath)

        const image = await loadImage(imagePath);
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext("2d");

        ctx.drawImage(image, 0, 0);

        switch (imageName) {
            case "number seal.png":
                break;
            case "for seal authorized.png":
            case "for seal branch manager.png":
                if (branchName) {
                    ctx.font = "bold 40px Arial";
                    ctx.textAlign = "right"; // Align text to the left
                    ctx.textBaseline = "bottom"; // Align text to the bottom
                    ctx.fillText(branchName + " Branch", canvas.width, canvas.height);
                }
                break;
            case "ROUND SEAL.png":
            case "SIGNATURE VERIFIED ROUND SEAL.png":
                if (branchName) {
                    const radius = 145; // Radius for text placement (between the circles)
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                
                    const text = branchName;
                    const fontSize = 35;
                    ctx.font = `${fontSize}px Arial`;
                    ctx.fillStyle = "black";
                    const maxCharWidth = getMaxCharWidth(ctx, "35px Arial");
                
                    // Calculate total text width and adjust angle for tighter spacing
                    const textWidthOrigin = ctx.measureText(text).width;
                    const textWidth = maxCharWidth * text.length
                    const angleStart = Math.PI; // Start angle slightly to the right of bottom center
                    const angleEnd = 0; // End angle slightly to the left of bottom center
                    const totalAngle = angleEnd - angleStart;
                
                    // Adjust character spacing to make it tighter
                    const charSpacingAngle = maxCharWidth / radius;
                    
                    let realTextAngle = 0;
                    for(let i = 0; i < text.length; i ++) {
                        const char = text[text.length - i - 1];
                        const charWidth = ctx.measureText(char).width;
                        //const charAngle = charWidth / radius ; // Reduce spacing by multiplying by 0.9
                        const charAngle = maxCharWidth / radius * 1.1; // Increase spacing for narrow characters
                        let offAngle = (maxCharWidth -  charWidth) / radius;
                        realTextAngle -= offAngle;
                        realTextAngle += charAngle; // Move to next character's angle
                    }
                    // Draw arc text
                    let currentAngle = angleStart + (totalAngle - realTextAngle) / 2 + maxCharWidth / radius * 1.1;
                    for (let i = 0; i < text.length; i++) {
                        const char = text[text.length - i - 1];
                        const charWidth = ctx.measureText(char).width;
                        //const charAngle = charWidth / radius ; // Reduce spacing by multiplying by 0.9
                
                        const charAngle = maxCharWidth / radius * 1.1; // Increase spacing for narrow characters
                        // Position each character on the arcconst 
                        let offAngle = (maxCharWidth -  charWidth) / radius;
                        currentAngle -= offAngle;
                        const x = centerX + radius * Math.cos(currentAngle);
                        const y = centerY + radius * Math.sin(currentAngle);
                        
                        ctx.save();
                        ctx.translate(x, y);
                        ctx.rotate(currentAngle - Math.PI / 2); // Rotate character upright along the arc (inverted for bottom placement)
                        ctx.fillText(char, 0, 0);
                        ctx.restore();
                        
                        currentAngle += charAngle; // Move to next character's angle
                    }
                }

                // if (branchName) {
                //     const radius = 120; // Radius for text placement (between the circles)
                //     const centerX = canvas.width / 2;
                //     const centerY = canvas.height / 2;

                //     const text = branchName;
                //     const fontSize = 35;
                //     ctx.font = `${fontSize}px Arial`;
                //     ctx.fillStyle = "black";

                //     // Calculate total text width and adjust angle for tighter spacing
                //     const textWidth = ctx.measureText(text).width;
                //     const angleStart = Math.PI + Math.PI / 8; // Start angle slightly to the left of bottom center
                //     const angleEnd = 2 * Math.PI - Math.PI / 8; // End angle slightly to the right of bottom center
                //     const totalAngle = angleEnd - angleStart;

                //     // Adjust character spacing to make it tighter
                //     const charSpacingAngle = (textWidth / text.length) / radius * 0.9;

                //     // Draw arc text
                //     let currentAngle = angleStart + (totalAngle - charSpacingAngle * text.length) / 2;
                //     for (let i = 0; i < text.length; i++) {
                //         const char = text[i];
                //         const charWidth = ctx.measureText(char).width;
                //         const charAngle = charWidth / radius * 0.9; // Reduce spacing by multiplying by 0.9

                //         // Position each character on the arc
                //         const x = centerX + radius * Math.cos(currentAngle);
                //         const y = centerY + radius * Math.sin(currentAngle);

                //         ctx.save();
                //         ctx.translate(x, y);
                //         ctx.rotate(currentAngle + Math.PI / 2); // Rotate character upright along the arc
                //         ctx.fillText(char, 0, 0);
                //         ctx.restore();

                //         currentAngle += charAngle; // Move to next character's angle
                //     }
                // }

                break;

            default:
                const formattedDate = formatDate(new Date());
                ctx.font = "55px Arial";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.fillText(formattedDate, image.width / 2, image.height / 2 + 20);

                if (branchName) {
                    ctx.font = "bold 45px Arial";
                    ctx.fillText(branchName + " Branch", image.width / 2, 108);
                }
        }
        res.set("Content-Type", "image/png");
        canvas.pngStream().pipe(res);
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).send("Failed to generate image");
    }
});
// Serve static files (if needed)
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(port, () => {
    console.log("Server Running on ", port)
})