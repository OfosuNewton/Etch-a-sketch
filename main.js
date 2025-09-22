
    
        let content = document.querySelector(".content");
        const board = document.querySelector(".flex-container");

        const Gridsize = 600;
        

        function changeBackground() {
            if (rainbowMode) {
                this.style.backgroundColor = getRandomColor();
            } else {
                this.style.backgroundColor = currentColor;
            }
        };

        function repeat(size) {
            for (let i=0; i < size * size; i++) {
            boxes = document.createElement('div');
            boxes.classList.add('box');
            content.appendChild(boxes);


            // Calculate size
            boxes.style.width = `${(Gridsize / size) }px`;
            boxes.style.height = `${(Gridsize / size) }px`;
          
            // Event Listener for coloring
            boxes.addEventListener('mouseover', changeBackground);
                
            

        };
     };

        repeat();

        let new_grid = document.querySelector('#chn-grid');
        new_grid.addEventListener('click', () => {

        while (content.firstElementChild) {
        content.removeChild(content.firstElementChild);
    };
        const new_size = Number(prompt('Enter grid size','eg: 16'));
        repeat(new_size);

        if (new_size > 100) {
            alert("Please enter a number between 1 to 100");
        
        };

    });

    // Tracking the current color
    let currentColor = "black";


    const colorPicker = document.querySelector("#color-picker");
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value; 
    });

    // adding a rainbow mode button logic
    let rainbowMode = false;

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g},${b})`;
    }
    
    
    const rainbowbtn = document.querySelector('#rainbowMode');
    rainbowbtn.addEventListener('click', () => {
        rainbowMode= !rainbowMode;
    });
    