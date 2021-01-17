import { fromPairs } from 'lodash';
import { connect, play } from './networking';
import { startRendering, stopRendering } from './render';
import { startCapturingInput, stopCapturingInput } from './input';
import { downloadAssets } from "./assets";
import { initState } from './state';

import './css/main.css';
// import ??? from test.js or /test
const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const victoryScreen = document.getElementById('victory-screen');
const replayButton = document.getElementById('replay-button');
const usernameInput = document.getElementById('username-input');

Promise.all([
    connect(),
    downloadAssets(),
]).then(() => {
    playMenu.classList.remove('hidden');
    usernameInput.focus();
    playButton.onclick = () => {
        play(usernameInput.value);
        playMenu.classList.add('hidden');
        // canvas.classList.remove('hidden');
        //call the test.js class to render
        initState();
        startCapturingInput();
        startRendering();
        //setLeaderboardHidden(false);
    };
    replayButton.onclick = () => {
        play(usernameInput.value);
        victoryScreen.classList.add('hidden'); 
        initState();
        startCapturingInput();
        startRendering();
        // setLeaderboardHidden(false);
    }
});