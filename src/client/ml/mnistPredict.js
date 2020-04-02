/* eslint-disable no-undef */

export async function predict(pixelMatrix) {
    const model = await tf.loadLayersModel('/static/models/mnist/mnist-model.json')
    
    let tensor = tf.tensor(pixelMatrix);

   
//We add a dimension to get a batch shape 
    tensor = tf.reshape(tensor, [28,28,1]);

    const batched = tensor.expandDims(0);

    const prediction = model.predict(batched);

    const predictionData = await prediction.data();

    const probability = Math.max(...predictionData)

    const label = predictionData.indexOf(probability);

    return {label, probability};
}