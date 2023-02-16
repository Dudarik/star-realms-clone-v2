<script setup lang="ts">
import ModalWindow from "@/components/modal/ModalWindow.vue";
import { storeToRefs } from "pinia";
import { useModal } from "@/stores";
import { ref, defineComponent, toRefs, reactive } from "vue";
import { useFullscreen } from '@vueuse/core'

const el = ref(null)
const { toggle, isFullscreen } = useFullscreen(el)

const { modalIsShow } = storeToRefs(useModal());

</script>

<template>
    <div class="wrapper" ref="el">
      <kinesis-container class="container">
        <kinesis-element class="parallax-bg">
          <div class="parallax-bg" :strength="100" type="depth"></div>
          <kinesis-element class="parallax-bg-circle" :strength="20">
          </kinesis-element>
        </kinesis-element>
        <div class="settings-btn" @click="modalIsShow = true">
          <modal-window />
        </div>
        <button @click="toggle">Fullscreen</button>
        <div class="title">
          <img src="../assets/Vector36.svg" alt="vector36" />
          <h1>{{ $t("titles.landTitle") }}</h1>
          <img src="../assets/Vector35.svg" alt="vector35" />
        </div>
        <nav class="nav-btns">
          <RouterLink to="/rules">{{ $t("buttons.rules") }}</RouterLink>
          <RouterLink to="/room">{{ $t("buttons.start") }}</RouterLink>
          <RouterLink to="/about">{{ $t("buttons.about") }}</RouterLink>
        </nav>
      </kinesis-container>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: black;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.atropos-bg {
  width: 1890px;
  height: 900px;
}

.container {
  position: relative;
  text-align: center;
  width: 1890px;
  height: 900px;
  background: url("../assets/Rectangle\ 1.png");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  .parallax-bg {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: url("../assets/Group.svg");
    background-size: cover;
    background-position: center center;
    // transition: all 0.1s ease;
  }

  .parallax-bg-circle {
    top: calc(50% - 200px);
    left: calc(50% - 200px);
    position: absolute;
    margin: 0 auto;
    width: 400px;
    height: 400px;
    background: url("../assets/Ellipse 5.svg");
    background-size: cover;
    background-position: center;
  }
}

.settings-btn {
  position: fixed;
  background-image: url("../assets/cog.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
  top: 60px;
  right: 60px;
  cursor: pointer;
}

.settings-btn:hover {
  animation: 1s linear 0s normal none infinite running rot;
  -webkit-animation: 1s linear 0s normal none infinite running rot;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title {
  position: absolute;
  top: 110px;
  left: calc(100% - 50% - 417px);
  img {
    opacity: 0.8;
    width: 834px;
  }
}

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 834px;
  height: 338px;
  font-family: "Russo One";
  font-size: 140px;
  font-weight: 400;
  line-height: 169px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
}

.nav-btns {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 100px;
}

a {
  margin: 50px;
  text-decoration: none;
  width: 280px;
  height: 60px;
  background: rgba(231, 231, 231, 0.8);
  text-shadow: 2px 2px 6px rgba(14, 81, 104, 0.6);
  font-family: "Russo One";
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 58px;
  text-align: center;
  text-transform: uppercase;
  color: #0f1b2c;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
}

a span {
  position: absolute;
  background: rgba(51, 203, 252);
  pointer-events: none;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(51, 203, 252), 0 0 20px rgba(51, 203, 252),
    0 0 30px rgba(51, 203, 252), 0 0 50px rgba(51, 203, 252),
    0 0 100px rgba(51, 203, 252);
  transition: 0.5s ease-in-out;
  transition-delay: 0.25s;
}

a span:nth-child(1),
a span:nth-child(3) {
  width: 20px;
  height: 2px;
}

a:hover span:nth-child(1),
a:hover span:nth-child(3) {
  transform: translateX(0);
}

a span:nth-child(2),
a span:nth-child(4) {
  width: 0;
  height: 0;
}

a:hover span:nth-child(1),
a:hover span:nth-child(3) {
  transform: translateY(0);
}

a span:nth-child(1) {
  top: calc(50% - 2px);
  left: -50px;
  transform-origin: left;
}

a:hover span:nth-child(1) {
  left: 50%;
}

a span:nth-child(3) {
  top: calc(50% - 2px);
  right: -50px;
  transform-origin: right;
}

a:hover span:nth-child(3) {
  right: 50%;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(184, 100%, 37%, 0.123);
    color: #ffffff;
    animation: text-flicker 3s linear infinite;
  }

  @keyframes text-flicker {
    0% {
      opacity: 0.1;
    }

    2% {
      opacity: 1;
    }

    8% {
      opacity: 0.1;
    }

    9% {
      opacity: 1;
    }

    12% {
      opacity: 0.1;
    }

    20% {
      opacity: 1;
    }

    25% {
      opacity: 0.3;
    }

    30% {
      opacity: 1;
    }

    70% {
      opacity: 0.7;
    }

    72% {
      opacity: 0.2;
    }

    77% {
      opacity: 0.9;
    }

    100% {
      opacity: 0.9;
    }
  }
}
</style>
