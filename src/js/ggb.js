export function pointCapture(view, mode) {
    ggbApplet.setPointCapture(view, mode);
}
export function updateGGB(slope, index) {
    const a = ggbApplet.getValue('a');
    ggbApplet2.evalCommand(`C_${index} = (${a}, ${slope})`);
    ggbApplet2.setColor(`C_${index}`, 0,0,0);
    ggbApplet2.setLabelVisible(`C_${index}`, false);
    ggbApplet2.setPointStyle(`C_${index}`, 0);
    ggbApplet2.setPointSize(`C_${index}`, 5);
    index += 1;
    ggbApplet.setValue('a', index * Math.PI / 12);
}

export function deleteSlope(index) {
    index += 1;
    ggbApplet2.deleteObject(`C_${index}`);
    ggbApplet.setValue('a', index * Math.PI / 12);
}

export function setPerspective(text, app) {
    if (app === 1) {
        ggbApplet.setPerspective(text);
    } else ggbApplet2.setPerspective(text);
}

export function getRoundedValue(obj) {
    return Math.round(1000 * parseFloat(ggbApplet.getValue(obj))) / 1000
}