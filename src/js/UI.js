

export const elements = {
    secInput: document.getElementById('user_inputPart1'),
    pInput: document.getElementById('p_input'),
    h3Input: document.getElementById('h3_input'),
    slope: document.getElementById('slope'),
    next: document.getElementById('next'),
    // feedback: document.getElementById('feedback'),
    // p_feedback: document.getElementById('p_feedback'),
    // p_feedbackBtn1: document.getElementById('p_feedbackBtns1'),
    // newBtn1: document.getElementById('newDom_button'),
    // prevBtn: document.getElementById('prevDom_button'),
    // nextBtn: document.getElementById('nextDom_button'),
}

export function updateInput(index) {
    pInput.innerHTML = `Enter the slope of the tangent line at \\(x=\\dfrac{${index}\\pi}{24}\\):  <input id="slope" placeholder="slope" type="text">><br>
    <button id="next">Next Slope</button>`
    MathJax.typeset();
}

export function getInputValue(id) {
    return document.getElementById(id).value
}

export function drawTable(xVals) {
    xVals.forEach((el, index) => {
        addRow('tbody', el, index);
    });
}

function addRow(id, xVal, index) {
    // Get a reference to the table
    let tableRef = document.getElementById(id);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
    newRow.id = `row${index}`
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    newCell2.id = `y${index}`;
  
    // Append a text node to the cell
    let newText = document.createTextNode(xVal);
    newCell.appendChild(newText);
  }


