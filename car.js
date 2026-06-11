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
            hd.innerText = 'About Jerry Lawson'
            txt.innerText = 'Jerry Lawson loved to make stuff in his garage. He taught himself how to make stuff, and eventually became an expert engineer. He joined the Fairchild semiconductor company, and eventually created the Fairchild Channel F, a revolutionary home console that could play multiple games. Before Channel F, Games had to have an entire console dedicated to them. Jerry helped Fairchild develop and make use of their new F8 Microprocessors. Using the F8, they were able to make the unreleased game called Destruction Derby, completed in early 1975. In the mid-1970s, Jerry was made Chief Hardware Engineer. He led the development of the Channel F. Finished in 1976, it was the first console with swappable game cartridges based on technology licensed from Alpex. Jerry Lawson has a Google Doodle named and created in his honor. That just shows how much He revolutionized the world of video games!!! Jerry Lawson was a member of the famous Homebrew Computer Club. He frequently met up with the future founders of Apple, Steve Jobs and Steve Wozniak.'
            break;
        case 'car2':
            hd.innerText = 'How Jerry Lawson revolutionized Video Games'
            txt.innerText = 'Jerry Lawson is widely considered as the first wide-spread African-American video game creator. He is the father of the video game cartridge, and he led the team that created the Fairchild Channel F. This created a whole new perspective on home gaming. “Ok, but all he did was make a new type of game? He barely did anything…” you say. Well, this is where you get proved wrong. Jerry created HOME GAMING, without this, we couldn\' even play Roblox, or Fortnite, or any other video game you can load on a home device. You would have to go to the arcade, pay to use a machine, and if you don\'t have an arcade near you, UH OH! I guess no video games for you… Nevermind this, it made history in such a way because Jerry Lawson was African-American. That\'s almost unheard of, as back then, there was much more racism. He changed gaming so much, and he did this all in the simple confines of his garage.'
            break;
        case 'car3':
            hd.innerText = 'More on the Console'
            txt.innerText = 'While it wasn\'t successful commercially, the Channel F and its F8 Microprocessor revolutionized how games were made and played. It also inspired the Atari 2600, which brought gaming from arcades to homes. And while it wasn\'t very strong in terms of computing power and wasn\'t used much, the idea was truly revolutionary, and the hardware itself is better viewed as a proof of concept.'
            break;
        case 'bonus':
            hd.innerText = 'Bonus! Nerdy Stuff (specs)'
            txt.innerHTML = '<p style="text-align: center;"> F8 microprocessor <br> Single Byte, Multichip system <br> 3850 CPU with 8B RAM and ALU <br> 3851 PLU with 2KB RAM <br> 2mHz Clock <br><br> Catridge One <br> F8 CPU <br> 64B RAM + Scratchpad <br> 2KB (128x64 px) VRAM (8 colors) <br> 0.5 + 1 + 1.5 kHz Audio </p>'
            break;
            
    }
}