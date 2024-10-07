// firstBox
function resubleBaseFunction(even){
    const baseFile = document.getElementById(even);
    const baseValseText = parseFloat(baseFile.value);
    baseFile.value = '';
    return baseValseText;
}

// secentBox

function resubleHeightFunction(even){
    const heightField = document.getElementById(even);
    const heightValueText = parseFloat(heightField.value);
    heightField.value = '';
    return heightValueText;
}

// innerText

function resubleAreaFunction(even){
    const areaCalcuter = document.getElementById(even);
    return areaCalcuter;
}

// add to Parallelogram

function addParallelogram(areaType,area,calcuter){
    // console.log(areaType + ' '+ area);
    const calculationEntry = document.getElementById(calcuter);
    
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-1');
    p.innerHTML =`${count+1}. ${areaType} ${area.toFixed(2)} cm<sup>2</sup>`;

    calculationEntry.appendChild(p)
}
