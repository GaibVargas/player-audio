import { secondsToMinutes } from './util.js';

export default {
  get() {
    this.cover = document.querySelector(".card-image");
    this.title = document.querySelector(".card-content h5");
    this.artist = document.querySelector(".artist");
    this.playPause = document.querySelector("#play-pause");
    this.vol = document.querySelector("#vol");
    this.volume = document.querySelector("#vol-control");
    this.seekBar = document.querySelector("#seek-bar");
    this.currentDuration = document.querySelector("#current-duration");
    this.totalDuration = document.querySelector("#total-duration");
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions() {
    this.audio.onended = () => this.next();
    this.audio.ontimeupdate = () => this.timeUpdate();
    this.playPause.onclick = () => this.togglePlayPause();
    this.vol.onclick = () => this.toggleMute();
    this.volume.oninput = () => this.setVolume(this.volume.value);
    this.volume.onchange = () => this.setVolume(this.volume.value);
    this.seekBar.oninput = () => this.setSeek(this.seekBar.value);
    this.seekBar.onchange = () => this.setSeek(this.seekBar.value);
    this.seekBar.max = this.audio.duration;
    this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
  }
}