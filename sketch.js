var colourPicker;
let strokeWeightSlider;
var bgColourPicker;

function setup(){
    createCanvas(1200,800);
    colourPicker = createColorPicker('LavenderBlush');
    
    strokeWeightSlider = createSlider(1,10,5,);
    
    bgColourPicker = createColorPicker('CornflowerBlue'); 
    
    var bgColorButton = createButton('Refresh');
    var saveButton = createButton('save image')
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    saveButton.mousePressed(saveDrawing);
    background( bgColourPicker.value() );
}

function draw(){
    // ellipse(mouseX, mouseY, 10,10);
    strokeWeight( strokeWeightSlider.value() );
    stroke( colourPicker.value() );   

    // remixed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    /// end remix
}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(300) );
}

function saveDrawing() {
    // remixed from https://p5js.org/reference/p5/saveCanvas/
    saveCanvas('my_drawing', 'png');
}