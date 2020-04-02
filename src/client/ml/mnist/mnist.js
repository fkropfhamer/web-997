import '../../../../styles/mnist.css';
import { predict } from './mnistPredict';
import { draw } from './mnistDraw';
import { normalize, getGreyScalePixelArray, chunkArray } from './mnistNormalize';

function main() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 25;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';


    let drawing = [[]]
    let mouseIsDown = false;

    canvas.addEventListener("mousemove", (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        if (mouseIsDown) {
            drawing[drawing.length - 1].push({x, y});
            draw(ctx, drawing);
        }
    });

    window.addEventListener("mousedown", () => {
        mouseIsDown = true;
    });

    window.addEventListener("mouseup", () => {
        if (drawing[drawing.length - 1].length > 0) {
            drawing.push([])
        }
        mouseIsDown = false;
    })

    const predictionParagraph = document.getElementById('p-prediction')

    const predictButton = document.getElementById('button-predict');
    predictButton.onclick = () => {
        const normalizedContext = normalize(ctx);
        let pixelArray = getGreyScalePixelArray(normalizedContext);

        pixelArray = Array.from(pixelArray);

        const pixelMatrix = chunkArray(pixelArray, 28);

        predictionParagraph.innerHTML = 'loading...'

        predict(pixelMatrix).then((result) => {
            console.log(result);
            predictionParagraph.innerHTML = `label: ${result.label}, probabilty: ${result.probability}`
        });
    };

    const clearButton = document.getElementById('button-clear');
    clearButton.onclick = () => {
        drawing = [[]];
        ctx.clearRect(0, 0, 256, 256)
        predictionParagraph.innerHTML = "";
    }

}

main();
