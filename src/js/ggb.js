export function pointCapture(view, mode) {
    ggbApplet.setPointCapture(view, mode);
}
export function updateGGB(slope, index) {
    ggbApplet.setValue(`B${index}`, slope);
    ggbApplet2.evalCommand(`C_${index} = (A${index}, B${index})`);
}

export function setPerspective(text, app) {
    if (app === 1) {
        ggbApplet.setPerspective(text);
    } else ggbApplet2.setPerspective(text);
}

export function getRoundedValue(obj) {
    return Math.round(1000 * parseFloat(ggbApplet.getValue(obj))) / 1000
}