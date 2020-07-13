export function pointCapture(view, mode) {
    ggbApplet.setPointCapture(view, mode);
}
export function updateGGB(slope, index) {
    ggbApplet.setValue(`B${index}`, slope);
    ggbApplet2.evaluateCommand(`C_${index} = (A${index}, B${index})`);
}

export function getRoundedValue(obj) {
    return Math.round(1000 * parseFloat(ggbApplet.getValue(obj))) / 1000
}