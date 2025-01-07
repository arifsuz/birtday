// MUSIC WIDGET
let currentSongIndex = 0;
const songs = [
    { title: "Jamrud - Selamat Ulang Tahun", src: "music/Jamrud-Selamat-Ulang-Tahu.mp3" },
    { title: "ANDMESH - ANUGERAH TERINDAH", src: "music/song2.mp3music/ANDMESH-ANUGERAH-TERINDAH.mp3" },
    { title: "Jaz - Bersamamu", src: "music/Jaz-Bersamamu.mp3" },
    { title: "Kita Bikin Romantis - Maliq & D'Essentials", src: "music/Kita-Bikin-Romantis-Maliq&D'Essentials.mp3" }
];

function toggleMusicWidget() {
    const widget = document.getElementById('music-widget');
    widget.style.display = widget.style.display === 'none' ? 'block' : 'none';
}

function playMusic() {
    const audio = document.getElementById('audio-player');
    if (audio) {
        audio.play();
    } else {
        console.error('Audio player element not found');
    }
}

function pauseMusic() {
    const audio = document.getElementById('audio-player');
    if (audio) {
        audio.pause();
    } else {
        console.error('Audio player element not found');
    }
}

function togglePlayPause() {
    const audio = document.getElementById('audio-player');
    if (audio) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    } else {
        console.error('Audio player element not found');
    }
}

function previousMusic() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeMusic();
}

function nextMusic() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeMusic();
}

function changeMusic() {
    const audio = document.getElementById('audio-player');
    const source = document.getElementById('audio-source');
    const selector = document.getElementById('music-selector');
    source.src = songs[currentSongIndex].src;
    selector.value = songs[currentSongIndex].src;
    audio.load();
    audio.play();
}

document.getElementById('music-selector').innerHTML = songs.map(song => `<option value="${song.src}">${song.title}</option>`).join('');

// Play the first song when the page loads
window.onload = function() {
    changeMusic();
};

// QUIZ
let score = 0;
let answers = ["Mixue", "Perpus Mercu", "14-September", "Nonton-di-Sedayu", "Perpus-Mercu"];
let selectedAnswers = new Array(answers.length).fill(null);

function selectAnswer(questionIndex, answer) {
    selectedAnswers[questionIndex] = answer;
}

function submitQuiz() {
    score = selectedAnswers.filter((answer, index) => answer === answers[index]).length;
    if (score >= 3) {
        showModal("Selamat! Kamu mendapatkan kesempatan buat milih hadiah ulang tahun kamu.", 'prizes.html');
    } else {
        showModal("Maaf kamu gagal dapet hadiah dari aku! JAWAB GITU AJA GABISA.", 'final.html');
    }
}

function showModal(message, redirectUrl) {
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal-button').onclick = function() {
        navigateTo(redirectUrl);
    };
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function navigateTo(url) {
    window.location.href = url;
}

// PRIZES
function selectPrize(prize) {
    document.getElementById('modal-message').innerText = `Kamu milih hadiah: ${prize}`;
    document.getElementById('modal-button').onclick = function() {
        navigateTo('final.html');
    };
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}