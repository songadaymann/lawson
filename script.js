let hd = document.getElementById('heading');
let txt = document.getElementById('text');
let pool = document.getElementById('pool');

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const car = document.getElementById(data);
    
    // Find the intended drop zone container if dropped on a child
    let targetZone = event.target;
    while (targetZone && !targetZone.classList.contains("dropzone")) {
        targetZone = targetZone.parentElement;
    }
     if (targetZone.children.length > 0 && targetZone.id !== 'pool') {
       const existingElement = targetZone.children[0];
        
        // Push the current item back to the original pool
        pool.appendChild(existingElement);
       }
    
    // Append the car to the container
    if (targetZone) {
        targetZone.appendChild(car);
    }
    
    switch (targetZone.children[0].id) {
      case 'car1':
        break;
    }
}
