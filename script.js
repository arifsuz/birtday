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
        showModal("Selamat! Kamu mendapatkan kesempatan buat milih hadiah ulang tahun kamu.", 'prizes');
    } else {
        showModal("Maaf kamu gagal dapet hadiah dari aku! JAWAB GITU AJA GABISA.", 'final');
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
    document.getElementById('modal-message-prizes').innerText = `Kamu milih hadiah: ${prize}`;
    document.getElementById('modal-button-prizes').onclick = function() {
        navigateTo('final');
    };
    document.getElementById('modal-prizes').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal-prizes').style.display = 'none';
}

// MUSIC WIDGET
const musicWidget = document.getElementById('music-widget');
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const musicSelector = document.getElementById('music-selector');
let isPlaying = false;
let currentTrackIndex = 0;

const musicList = [
    "music/Jamrud-Selamat-Ulang-Tahun.mp3",
    "music/ANDMESH-ANUGERAH-TERINDAH.mp3",
    "music/Jaz-Bersamamu.mp3",
    "music/Kita-Bikin-Romantis-Maliq&D'Essentials.mp3"
];

function toggleMusicWidget() {
    if (musicWidget.style.display === 'none' || musicWidget.style.display === '') {
        musicWidget.style.display = 'block';
    } else {
        musicWidget.style.display = 'none';
    }
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
    localStorage.setItem('isPlaying', isPlaying);
}

function previousMusic() {
    currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
    changeMusicTrack();
}

function nextMusic() {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    changeMusicTrack();
}

function changeMusic() {
    currentTrackIndex = musicSelector.selectedIndex;
    changeMusicTrack();
}

function changeMusicTrack() {
    audioSource.src = musicList[currentTrackIndex];
    audioPlayer.load();
    if (isPlaying) {
        audioPlayer.play();
    }
    localStorage.setItem('currentTrackIndex', currentTrackIndex);
}

// Ensure the music widget is available on all pages
window.addEventListener('load', () => {
    document.body.appendChild(musicWidget);
    document.body.appendChild(document.getElementById('music-widget-icon'));

    // Restore music player state
    currentTrackIndex = parseInt(localStorage.getItem('currentTrackIndex')) || 0;
    isPlaying = localStorage.getItem('isPlaying') === 'true';
    audioSource.src = musicList[currentTrackIndex];
    audioPlayer.load();
    if (isPlaying) {
        audioPlayer.play();
    }
});

// Navigation
function navigateTo(pageId) {
    const pages = ['main-page', 'gallery-page', 'quiz-page', 'prizes-page', 'final-page'];
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });
    document.getElementById(`${pageId}-page`).style.display = 'block';
}