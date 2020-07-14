

export const elements = {
    slope: document.getElementById('slope'),
    next: document.getElementById('next'),
    tableRef: document.getElementById('tbody')
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
        addRow(el, index);
    });
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


