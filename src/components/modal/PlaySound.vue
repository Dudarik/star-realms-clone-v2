<template>
<div class="w-full h-screen flex flex-col bg-gray-100 overflow-hidden" id="demo_wrap">
    <div class="w-1/5 flex md:w-2/12 m-auto items-center">
      <div class="w-3/12 md:w-2/12 hover:bg-gray-500 rounded-full md:p-1" @click="mute()">
        <svg v-if="mutePlayer" class="w-6 h-6 m-auto text-red-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
        <svg v-else class="w-6 h-6 m-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
                  </div>  
                  <div class="w-9/12 md:w-10/12 m-auto relative">
                      <div @click="volume($event)" ref="volBar" class="h-1 bg-grey-dark cursor-pointer rounded-full bg-gray-500 m-auto relative" style="width:100%">
                          <div class="flex justify-end h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full relative" :style="{'width' : volumeProgress + '%'}"></div>
                      </div>
        <div
          class="flex justify-end h-1 rounded-full relative"
          :style="{
            width: volumeProgress + '%',
          }">
          <span
            id="progressButtonVolume"
            class="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-teal-400 to-blue-500 absolute pin-r pin-b -mb-1 rounded-full shadow"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, computed } from "vue";
import A1 from "@/music/A1.mp3";
import { Howl, Howler } from "howler";
export default {
  name: "SoundPlayer",
  mounted(){ 
    const sound = this.audios[this.index].howl;
    const barWidth = (0.9 * 100) / 100;
    this.sliderBtnVol = (this.volBar.offsetWidth * barWidth + this.volBar.offsetWidth * 0.05 - 25);
},
  setup(){
    const audios = ref([
      {name: 'Silver Spirit',file: A1,artist: 'Shamika Cox' ,howl: null},
    ]);
          const repeat = ref(false);
          const index = ref(0);
          const progress = ref(null);
          const volBar = ref(null);
          const sliderBtn = ref(0);
          const sliderBtnVol = ref(null);
          const volumeProgress = ref(90);
          const mutePlayer = ref(false);
          const state = reactive({
            audioPlaying: []
          })
          function play(){
              let sound;
              const audio = audios.value[index.value];
              if (audio.howl) {
                  sound = audio.howl
              }else{
                  state.audioPlaying[index.value] = false;
                  sound = audio.howl =  new Howl({
                  src: [audio.file],
                  html5: true, // A live stream can only be played through HTML5 Audio.
                  format: ['mp3', 'aac'],
                  });
              }
              sound.play();
              state.audioPlaying[index.value] = true;
          }
    function volume(event){
              const per = event.layerX / parseFloat(volBar.value.scrollWidth);
              const barWidth = (per * 100) / 100;
              volumeProgress.value = barWidth * 100;
              sliderBtnVol.value = (volBar.value.offsetWidth * barWidth + volBar.value.offsetWidth * 0.05 - 25);
              Howler.volume(per);
    }
    function mute() {
        const audio = audios.value[index.value].howl;
              
            if (audio) {
                 mutePlayer.value  = !mutePlayer.value;
                 mutePlayer.value ? audio.mute(true) : audio.mute(false)
            }
          }
          
          return{
            play,audios,index,state,repeat,
              progress,volume,volBar,volumeProgress,sliderBtn,mute,mutePlayer,
              sliderBtnVol,
          }
      }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  * {
      font-family: 'Poppins', sans-serif;
  }
  #journal-scroll::-webkit-scrollbar {
      width: 4px;
      cursor: pointer;
  }
  #journal-scroll::-webkit-scrollbar-track {
      background-color: rgba(229, 231, 235, var(--bg-opacity));
      cursor: pointer;
  }
  #journal-scroll::-webkit-scrollbar-thumb {
      cursor: pointer;
      background-color: #a0aec0;
      
  }
  .cd-center{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #f7fafc;
  }
  #progressButtonTimer,#progressButtonVolume{
      margin-top:-9px;
      right:-8px;
  }
  @media screen and (max-width: 768px) {
    #progressButtonTimer, #progressButtonVolume{
      margin-top: -8px;
      right: -7px;
    }
  }
  </style>