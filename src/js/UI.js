

export const elements = {
    slope: document.getElementById('slope'),
    next: document.getElementById('next'),
    tableRef: document.getElementById('tbody'),
    xInput: document.getElementById('xInput'),
    back: document.getElementById('back')
}

export function updateInput(index, slope) {
    let yCell = document.getElementById(`y${index}`);
    let newText = document.createTextNode(slope);
    yCell.appendChild(newText);
    index+=1;
    elements.xInput.innerHTML = `\\(\\dfrac{${index}\\pi}{12}\\)`;
    MathJax.typeset();
    if (index > 0) elements.back.style.visibility = 'visible';
}

export function deleteLastSlope(index) {
    if (index < 0) elements.back.style.visibility = 'hidden';
    index += 1;
    let yCell = document.getElementById(`y${index}`);
    yCell.innerHTML = '';
    elements.xInput.innerHTML = `\\(\\dfrac{${index}\\pi}{12}\\)`;
    MathJax.typeset();
    if (index > 0) elements.back.style.visibility = 'visible';
}

export function getInputValue(id) {
    return document.getElementById(id).value
}

export function drawTable(xVals) {
    xVals.forEach((el, index) => {
        addRow(el, index);
    });
}

export function clearSlope() {
    elements.slope.value = '';
    elements.slope.focus();
}

function addRow(xVal, index) {
    
    // Insert a row at the end of the table
    let newRow = elements.tableRef.insertRow(-1);
    newRow.id = `row${index}`
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    newCell2.id = `y${index}`;
  
    // Append a text node to the cell
    let newText = document.createTextNode(xVal);
    newCell.appendChild(newText);
  }


