addEventListener('message', (d)=> {
    const imageData = d.data;

    const w = imageData.width;
    const h = imageData.height;
    const data = imageData.data;
    let imageDataCopy = new Uint8ClampedArray(imageData.data);
    // imageDataCopy.data.set(originalImageData.data);
    console.log(imageDataCopy);
    console.log(imageData.data);
    
    
    // for (let x=0; x<w; x++){
    //     for(let y=0; y<h; y++){

            // let pixel = getPixel(x,y,w);
            
            // pixel[1] = pixel[1]*2.2;
            // pixel[0] = 0;
            // setPixel(x,y,w, data);
            // data

           
            // data[getIndex(x,y,w)+3] = (w-x);
            
    //     }
    // }
    
    // basic reflection
    let smaller = [];
    for (let x=0; x<w; x+=2){
        for(let y=0; y<h; y+=2){
            let index = getIndex(x,y,w);
            smaller.push([data[index], data[index+1], data[index+2], data[index+3]]);
            // let newIndex = getIndex(parseInt(x/2),parseInt(y/2)+parseInt(h/2), w);
            // data[newIndex] = data[index];
            // data[newIndex+1] = data[index+1];
            // data[newIndex+2] = data[index+2];
            
            // data[getIndex(x,y+h/2,w)] = 255;
            // data[getIndex(x,y+h/2,w)+1] = 0;
        }
    }

    let sm = new Uint8ClampedArray(smaller);
    // postMessage(imageData, [imageData.data.buffer]);
    self.postMessage(sm);
})

function getIndex(x,y,w) {
    return (x + (y * w)) * 4;
}

function getPixel(x, y) {
    let index = getIndex(x,y);
    return [index, index+1, index+2, index+3];
}

function setPixel(x, y, w, data) {
    let index = getIndex(x,y,w);
    let index2 = getIndex(x+2,y,w);
    if(x%2==0) {
        data[index] = 255;
        // data[index2+1] = data[index+1]*2;
        // data[index2+2] = data[index+2]*2;
        // data[index2+3] = data[index+3]*2;


    }
    // data[index+1] = newPixel[1];
    // data[index+2] = newPixel[2];
    // data[index+3] = newPixel[3];
    // return data;

}