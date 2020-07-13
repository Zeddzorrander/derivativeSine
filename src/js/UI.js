

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

export function resetDOM() {
    elements.feedback.style.display = 'none';
    elements.secInput1.style.display = 'block';
    elements.center.value = '';
    elements.radius.value = '';
    elements.center.focus();
}
