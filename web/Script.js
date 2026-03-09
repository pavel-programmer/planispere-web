

        const urlParams = new URLSearchParams(window.location.search);
        const winterTime = urlParams.get('winterTime');
        const summerTime = urlParams.get('summerTime');


document.addEventListener("DOMContentLoaded", function () {
    const directionsBtn = document.getElementById("directionsBtn");
    const directionsMenu = document.getElementById("directionsMenu");

    directionsBtn.addEventListener("click", function () {
        if (directionsMenu.style.display === "none" || directionsMenu.style.display === "") {
            directionsMenu.style.display = "flex";
        } else {
            directionsMenu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const directionsBtn = document.getElementById("finetuningBtn");
    const directionsMenu = document.getElementById("finetuning");

    directionsBtn.addEventListener("click", function () {
        if (finetuning.style.display === "none" || finetuning.style.display === "") {
            finetuning.style.display = "flex";
        } else {
            finetuning.style.display = "none";
        }
    });
});


const q = document.getElementById('q');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');



q.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});


        function rotateImage() {
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const hoursSelect = document.getElementById('hours');
    const minutesSelect = document.getElementById('minutes');
    const rotateImage = document.getElementById('rotate-image');
    const mapImage = document.getElementById('map-image'); 

    const selectedMonth = monthSelect.value;
    const selectedDay = parseInt(daySelect.value);
    const selectedHours = parseInt(hoursSelect.value);
    const selectedMinutes = parseInt(minutesSelect.value);
    let rotationAngle = 0;

    switch (selectedMonth) {
        case 'january':
            rotationAngle = 0;
            break;
        case 'february':
            rotationAngle = 31;
            break;
        case 'march':
            rotationAngle = 59;
            break;
        case 'april':
            rotationAngle = 89.5;
            break;
        case 'may':
            rotationAngle = 119.5;
            break;
        case 'june':
            rotationAngle = 149.5;
            break;
        case 'july':
            rotationAngle = 179;
            break;
        case 'august':
            rotationAngle = 209.3;
            break;
        case 'september':
            rotationAngle = 240;
            break;
        case 'october':
            rotationAngle = 269;
            break;
        case 'november':
            rotationAngle = 299.5;
            break;
        case 'december':
            rotationAngle = 329;
            break;
        default:
            rotationAngle = 0;
            break;
    }

            if (selectedMonth === 'february' && selectedDay === 29) {
        rotationAngle += 28; 
    } else {
        rotationAngle += parseFloat(daySelect.value);
    }

    rotationAngle += selectedHours * 15 + selectedMinutes * 0.25;

    // + winterTime и summerTime
            if (winterTime !== null && (selectedMonth === 'january' || selectedMonth === 'february' || selectedMonth === 'december' || selectedMonth === 'march' || selectedMonth === 'november' || selectedMonth === 'october')) {
        const roundedWinterTime = Math.round(winterTime / 10) * 10;
        rotationAngle += (roundedWinterTime / 10) * 2.5;
            } else if (summerTime !== null && (selectedMonth === 'june' || selectedMonth === 'july' || selectedMonth === 'august' || selectedMonth === 'april' || selectedMonth === 'may' || selectedMonth === 'september')) {
        const roundedSummerTime = Math.round(summerTime / 10) * 10;
        rotationAngle += (roundedSummerTime / 10) * 2.5;
    }

    rotateImage.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;

    
    mapImage.style.transform = 'translate(-50%, -50%) rotate(0deg)';
}

        function updateDays() {
            const monthSelect = document.getElementById('month');
            const daySelect = document.getElementById('day');
            const selectedMonth = monthSelect.value;
            let daysInMonth;

            switch (selectedMonth) {
                case 'april':
                case 'june':
                case 'september':
                case 'november':
                    daysInMonth = 30;
                    break;
                case 'february':
                    daysInMonth = 29;
                    break;
                default:
                    daysInMonth = 31;
                    break;
            }

         
            const selectedDay = parseInt(daySelect.value);
            daySelect.innerHTML = '';
            for (let i = 1; i <= daysInMonth; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = i;
                if (i === selectedDay) {
                    option.selected = true; 
                }
                daySelect.appendChild(option);
            }
        }

        const customizeBtn = document.getElementById('customizeBtn');
        customizeBtn.addEventListener('click', rotateImage);

        const monthSelect = document.getElementById('month');
        monthSelect.addEventListener('change', updateDays);

        rotateImage();
        updateDays();


        
        let lastRotationAngle = 0;


      

       
    const resetBtn = document.getElementById('resetBtn');
    const rotateImageElement1 = document.getElementById('rotate-image');
    const rotateImageElement2 = document.getElementById('map-image');
    let rotationAngle = 0;
//North
    function resetImagePosition() {

        rotateImage();
   
    const currentTransform = rotateImageElement1.style.transform;
    const matches = currentTransform.match(/rotate\(([\d.]+)deg\)/);
    if (matches && matches.length === 2) {
        const currentAngle = parseFloat(matches[1]);
        rotationAngle = currentAngle;
    }

   
    rotateImageElement1.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    const newMapRotation = 360 - rotationAngle;
    rotateImageElement2.style.transform = `translate(-50%, -50%) rotate(${newMapRotation}deg)`;

   
    const rotatedDegrees = rotationAngle;
 


  rotateEllipse(newMapRotation, rotationPointX, rotationPointY);
}

    resetBtn.addEventListener('click', resetImagePosition);

//East
    function rotateImageEast() {
       // rotateEllipse(90, rotationPointX, rotationPointY);
        rotateImage();
      
        const rotateImageElement1 = document.getElementById('rotate-image');
        const rotateImageElement2 = document.getElementById('map-image');
        let rotationAngle = 0;

        const currentTransform1 = rotateImageElement1.style.transform;
        const matches1 = currentTransform1.match(/rotate\(([\d.]+)deg\)/);
        if (matches1 && matches1.length === 2) {
            const currentAngle1 = parseFloat(matches1[1]);
            rotationAngle = currentAngle1;
        }

        rotateImageElement1.style.transform = 'translate(-50%, -50%) rotate(90deg)';
        const newMapRotation = 450 - rotationAngle;
        rotateImageElement2.style.transform = `translate(-50%, -50%) rotate(${newMapRotation}deg)`;

        rotateEllipse(newMapRotation, rotationPointX, rotationPointY);
    }
rotateEastBtn.addEventListener('click', rotateImageEast);

    //South
    function rotateImageSouth() {
        
        rotateImage();
       
        const rotateImageElement1 = document.getElementById('rotate-image');
        const rotateImageElement2 = document.getElementById('map-image');
        let rotationAngle = 0;

        const currentTransform1 = rotateImageElement1.style.transform;
        const matches1 = currentTransform1.match(/rotate\(([\d.]+)deg\)/);
        if (matches1 && matches1.length === 2) {
            const currentAngle1 = parseFloat(matches1[1]);
            rotationAngle = currentAngle1;
        }

        rotateImageElement1.style.transform = 'translate(-50%, -50%) rotate(180deg)';
        const newMapRotation = 540 - rotationAngle;
        rotateImageElement2.style.transform = `translate(-50%, -50%) rotate(${newMapRotation}deg)`;

        rotateEllipse(newMapRotation, rotationPointX, rotationPointY);
    }
    rotateSouthBtn.addEventListener('click', rotateImageSouth);


    //West
    function rotateImageWest() {
        
        rotateImage();
      
        const rotateImageElement1 = document.getElementById('rotate-image');
        const rotateImageElement2 = document.getElementById('map-image');
        let rotationAngle = 0;

        const currentTransform1 = rotateImageElement1.style.transform;
        const matches1 = currentTransform1.match(/rotate\(([\d.]+)deg\)/);
        if (matches1 && matches1.length === 2) {
            const currentAngle1 = parseFloat(matches1[1]);
            rotationAngle = currentAngle1;
        }

        rotateImageElement1.style.transform = 'translate(-50%, -50%) rotate(270deg)';
        const newMapRotation = 630 - rotationAngle;
        rotateImageElement2.style.transform = `translate(-50%, -50%) rotate(${newMapRotation}deg)`;


        rotateEllipse(newMapRotation, rotationPointX, rotationPointY);
    }


    rotateWestBtn.addEventListener('click', rotateImageWest);

 
//    const resetMapBtn = document.getElementById('resetMapBtn');
    const rotateImageElement11 = document.getElementById('rotate-image');
    const rotateImageElement22 = document.getElementById('map-image');
    let rotationAngle1 = 0;

    function resetMapPosition() {
      
       rotateImageElement22.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    }

  //  resetMapBtn.addEventListener('click', resetMapPosition);  



  //  const customizeBtn = document.getElementById('customizeBtn');
        let animationPaused = false;

        customizeBtn.addEventListener('click', function() {
            if (animationPaused) {
                customizeBtn.style.animationPlayState = 'running';
                animationPaused = false;
            } else {
                customizeBtn.style.animationPlayState = 'paused';
                animationPaused = false;
            }
        });

document.getElementById('back').addEventListener('click', function () {
    history.go(-1);
});


const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

plusBtn.addEventListener('click', rotatePlus);
minusBtn.addEventListener('click', rotateMinus);


function getCurrentRotation(el) {
    const style = window.getComputedStyle(el);
    const transform = style.getPropertyValue('transform');

    if (transform === 'none') return 0;


    const values = transform.match(/matrix\(([^)]+)\)/);
    if (!values) return 0;

    const [a, b] = values[1].split(',').map(parseFloat);
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return (angle + 360) % 360;
}

function rotatePlus() {
    const rotateImageEl = document.getElementById('map-image');
    const currentAngle = getCurrentRotation(rotateImageEl);
    const newAngle = currentAngle - 1;
    rotateImageEl.style.transform = `translate(-50%, -50%) rotate(${newAngle}deg)`;
    rotateEllipse(newAngle, rotationPointX, rotationPointY);
}

function rotateMinus() {
    const rotateImageEl = document.getElementById('map-image');
    const currentAngle = getCurrentRotation(rotateImageEl);
    const newAngle = currentAngle + 1;
    rotateImageEl.style.transform = `translate(-50%, -50%) rotate(${newAngle}deg)`;
    rotateEllipse(newAngle, rotationPointX, rotationPointY);
}

const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];




