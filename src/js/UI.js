

export const elements = {
    slope: document.getElementById('slope'),
    xVal: document.getElementById('xVal'),
    next: document.getElementById('next'),
    tableRef: document.getElementById('tbody'),
    xInput: document.getElementById('xInput'),
    back: document.getElementById('back'),
    p_input1: document.getElementById('p_input1'),
    p_input2: document.getElementById('p_input2'),
    submit: document.getElementById('submit')
}

export function updateInput2(xVal, index) {
    elements.p_input1.style.display = 'none';
    elements.p_input2.style.display = 'block';
    elements.xInput.innerHTML = `\\(x = ${xVal}\\)`;
    clearInput('slope');
    setFocus('slope');
    MathJax.typeset();
    addRow(xVal, index);
    if (index > 0) elements.back.style.visibility = 'visible';
}

export function updateInput(index, slope) {
    elements.p_input2.style.display = 'none';
    elements.p_input1.style.display = 'block';
    clearInput('xVal');
    setFocus('xVal');
    let yCell = document.getElementById(`y${index}`);
    let newText = document.createTextNode(slope);
    yCell.appendChild(newText);
    index+=1;
    if (index > 0) elements.back.style.visibility = 'visible';
}

export function deleteLastSlope(index) {
    if (index < 0) elements.back.style.visibility = 'hidden';
    index += 1;
    let yCell = document.getElementById(`y${index}`);
    yCell.innerHTML = '';
    elements.xInput.innerHTML = `\\(\\dfrac{${index}\\pi}{12}\\)`;
    MathJax.typeset();
}

export function getInputValue(id) {
    return document.getElementById(id).value
}

export function drawTable(xVals) {
    xVals.forEach((el, index) => {
        addRow(el, index);
    });
}

function clearInput(id) {
    const input = document.getElementById(id)
    input.value = '';
}

function setFocus(id) {
    const input = document.getElementById(id);
    input.focus();
}

function addRow(xVal, index) {
    
    // Insert a row at the end of the table
    let newRow = elements.tableRef.insertRow(-1);
    newRow.id = `row${index}`
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
    newCell.id = `x${index}`;
    let newCell2 = newRow.insertCell(1);
    newCell2.id = `y${index}`;
  
    // Append a text node to the cell
    let newText = document.createTextNode(xVal);
    newCell.appendChild(newText);
  }


