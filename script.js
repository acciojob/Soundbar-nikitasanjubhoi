//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3']; // Replace with your actual filenames (without extension)
const buttonsContainer = document.getElementById('buttons');

// Function to stop all sounds
function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  
  btn.addEventListener('click', () => {
    stopSounds(); // Stop any currently playing sound
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);

