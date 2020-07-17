export const parameters = {
    "id": "ggbApplet",
    "width":500,
    "height":450,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":true,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){
        api.setAxisLabels(1, 'x', `f`);
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    "rounding":"3",
    // use this instead of ggbBase64 to load a material from geogebra.org
    // "material_id":"dc8wdzkc",
    // use this instead of ggbBase64 to load a .ggb file
    // "filename":"../ggb/derivativeSine.ggb"
    "ggbBase64":"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",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

// export function ggbFunctionf(x) {
//     return 0.05 * (x + 4) * (x - 1) * (x - 5);
// };

export const parameters2 = {
    "id": "ggbApplet2",
    "width":500,
    "height":450,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":true,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":true,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){
                                    api.setAxisLabels(1, 'x', `f'`);
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    "rounding":"3",
    // use this instead of ggbBase64 to load a material from geogebra.org
    // "material_id":"dc8wdzkc",
    // use this instead of ggbBase64 to load a .ggb file
    // "filename":"http://Users/Zeddzorrander/Documents/Sabbatical2020/functionImages1/GeoGebra/FunctionImages.ggb"
    "ggbBase64":"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",
    
};