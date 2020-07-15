

export const elements = {
    slope: document.getElementById('slope'),
    xVal: document.getElementById('xVal'),
    next: document.getElementById('next'),
    tableRef: document.getElementById('tbody'),
    xInput: document.getElementById('xInput'),
    p_input1: document.getElementById('p_input1'),
    p_input2: document.getElementById('p_input2'),
    p_buttons: document.getElementById('p_buttons'),
    submit: document.getElementById('submit'),
    deletePair: document.getElementById('deletePair'),
    guess: document.getElementById('guess')
}

export function updateInput2(xVal, index) {
    // toggle input paragraphs
    elements.p_input1.style.display = 'none';
    elements.p_input2.style.display = 'block';
    elements.p_buttons.style.display = 'none';
    
    // update the span showing what x-value we are finding the slope at
    elements.xInput.innerHTML = `\\(x = ${xVal}\\)`;
    MathJax.typeset();
    
    // prepare UI for new entry
    clearInput('slope');
    setFocus('slope');
    
    // add the x-value to the table
    addRow(xVal, index);
    
    // toggle back button if there are any previous entries
    // if (index > 0) elements.back.style.visibility = 'visible';
}

export function updateInput(index, slope) {
    // toggle input paragraphs
    elements.p_input2.style.display = 'none';
    elements.p_input1.style.display = 'block';
    // prepare input boxes for new entries
    clearInput('xVal');
    setFocus('xVal');
    
    // add slope to the table
    let yCell = document.getElementById(`y${index}`);
    let newText = document.createTextNode(slope);
    yCell.appendChild(newText);
    index+=1;
    
    // set 
    if (index > 0) elements.deletePair.style.visibility = 'visible';
    if (index >= 5) elements.p_buttons.style.display = 'block';
}

export function deleteLastSlope(index, xVal) {
    // toggle back button if no previous entries
    if (index < 0) elements.deletePair.style.visibility = 'hidden';
    index += 1;

    //delete last slope from the table
    let yCell = document.getElementById(`y${index}`);
    yCell.innerHTML = '';

    //reset the dom for a new slope entry
    elements.p_input1.style.display = 'none';
    elements.p_input2.style.display = 'block';
    clearInput('slope');
    setFocus('slope');
    elements.xInput.innerHTML = `\\(x = ${xVal}\\)`;
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

export function resetDOM() {
    document.getElementById('tbody').deleteRow(-1);
    elements.p_input1.style.display = 'block';
    elements.p_input2.style.display = 'none';
    elements.p_buttons.style.display = 'none';
    clearInput('xVal');
    setFocus('xVal');
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


