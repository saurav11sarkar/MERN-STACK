// TrianglaArea
function calcuterTrianglaArea(){
    const basevalueText = resubleBaseFunction('triangle-base');
    const heightValueText = resubleHeightFunction('triangle-height');

    const areacalcuter = resubleAreaFunction('area-calcuter');
  
    if (isNaN(basevalueText) || isNaN(heightValueText)){
        areacalcuter.innerText = '0';
    }else{
        const trangle = 0.5 * basevalueText * heightValueText;
        areacalcuter.innerText = trangle.toFixed(2);
        addParallelogram('Triangl',trangle,'calculation-entry');
    }
}

// RectangleArea
function calcuterRectangleArea(){
    const widthValueText = resubleBaseFunction('rectangle-width');
    const lengthvalueText = resubleHeightFunction('rectangle-length');

    const areacalcuter = resubleAreaFunction('rectangle-calcuter');

    if(isNaN(widthValueText) || isNaN(lengthvalueText)){
        areacalcuter.innerText = '0';
     }else{
        const rectangle = widthValueText * lengthvalueText;
        areacalcuter.innerText = rectangle.toFixed(2);
        addParallelogram('Rectangle',rectangle,'calculation-entry');
     }
}

// ParallelogramArea
function calcuterParallelogramArea(){
    const widthValueText = resubleBaseFunction('parallelogram-base');
    const heightValueText = resubleHeightFunction('parallelogram-height');

    const areacalcuter = resubleAreaFunction('parallelogram-calcuter');

    if (isNaN(widthValueText) || isNaN(heightValueText)){
        areacalcuter.innerText = '0';
    }else{
        const parallelogram = widthValueText * heightValueText;
        areacalcuter.innerText = parallelogram.toFixed(2);
        addParallelogram('Parallelogram',parallelogram,'calculation-entry');
    }


}

// Rhombus
function calcuterRhombusArea(){
    const widthValueText = resubleBaseFunction('rhombus-base');
    const heightValueText = resubleHeightFunction('rhombus-height');

    const areacalcuter = resubleAreaFunction('rhombus-calcuter');

    if (isNaN(widthValueText) || isNaN(heightValueText)){
        areacalcuter.innerText = '0';
    }else{
        const rhombus = 0.5 * widthValueText * heightValueText;
        areacalcuter.innerText = rhombus.toFixed(2);
        addParallelogram('Rhombus',rhombus,'calculation-entry');
    }
}

// Pentagon
function calcuterPentagonArea(){
    const widthValueText = resubleBaseFunction('pentagon-base');
    const heightValueText = resubleHeightFunction('pentagon-height');

    const areacalcuter = resubleAreaFunction('pentagon-calcuter');

    if (isNaN(widthValueText) || isNaN(heightValueText)){
        areacalcuter.innerText = '0';
    }else{
        const pentagon = 0.5 * widthValueText * heightValueText;
        areacalcuter.innerText = pentagon.toFixed(2);
        addParallelogram('Pentagon',pentagon,'calculation-entry');
    }    
}

// Ellipse
function calcuterEllipseArea(){
    const widthValueText = resubleBaseFunction('ellipse-base');
    const heightValueText = resubleHeightFunction('ellipse-height');

    const areacalcuter = resubleAreaFunction('ellipse-calcuter');

    if (isNaN(widthValueText) || isNaN(heightValueText)){
        areacalcuter.innerText = '0';
    }else{
        
        const ellipse = Math.PI * widthValueText * heightValueText;
        areacalcuter.innerText = ellipse.toFixed(2);
        addParallelogram('Ellipse',ellipse,'calculation-entry');
    } 
}
