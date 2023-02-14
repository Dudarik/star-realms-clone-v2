<template>
  <Teleport to="body">
    <transition name="modal-anime">
      <div class="modal" v-if="modalIsShow" @click="closeModal">
        <section @click.stop class="modal__form">
          <span class="modal__form--close" @click="closeModal">X</span>
          <h2 class="modal__form--header">{{ $t("modal") }}</h2>
          <section class="modal__form--info">
            <div class="personal-info">
              <p>{{ $t("checkbox.language") }}</p>
              <button @click="switchLang">{{ locale }}</button>
              <button @click="toggleSound" class="btn__sound">SOUND
                <i class="volume-off"></i>
              </button>
              <div class="card">
                <input
                  @change="toggleTheme"
                  id="checkbox"
                  type="checkbox"
                  class="switch-checkbox"
                />
                <label for="checkbox" class="switch-label">
                  <span>🌙{{ userTheme }}☀️</span>
                  <span></span>
                  <div
                    class="switch-toggle"
                    :class="{
                      'switch-toggle-checked': userTheme === 'dark-theme',
                    }"
                  ></div>
                </label>
              </div>
            </div>
          </section>
        </section>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { useModal } from "@/stores";
import { watch, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { audio } from "@/main";

const audio_icon = document.querySelector(".btn__sound i");

audio.muted = false;
audio.autoplay = true;
audio.volume = 1;

audio.addEventListener("loadedmetadata", function () {
  audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0);
});

const toggleSound = () => {
  if (audio.muted) {
    audio.muted = false;
    audio_icon?.classList.add("volume-up");
    audio_icon?.classList.remove("volume-off");
  } else if (!audio.muted) {
    audio.muted = true;
    audio_icon?.classList.add("volume-off");
    audio_icon?.classList.remove("volume-up");
  }
};

const userTheme = ref("light-theme");

const setTheme = (theme: string) => {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
};

const toggleTheme = () => {
  const activeTheme = localStorage.getItem("user-theme");

  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
};

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
};

onMounted(() => {
  const currentTheme = localStorage.getItem("user-theme");

  if (currentTheme !== null) {
    setTheme(currentTheme);
  } else {
    const initUserTheme = getMediaPreference();
    setTheme(initUserTheme);
  }
});

const { t, locale } = useI18n({ useScope: "global" });

const switchLang = () => {
  locale.value === "en" ? (locale.value = "ru") : (locale.value = "en");
  localStorage.setItem("lang", locale.value as string);
};

const modalStore = useModal();

const { modalIsShow } = storeToRefs(modalStore);

const closeModal = (): void => {
  modalIsShow.value = false;
};

watch(modalIsShow, (newModalIsShow) => {
  if (newModalIsShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  font-family: "Poppins", sans-serif;
  background-color: rgba(19, 19, 19, 0.5);
  overflow: hidden;
  z-index: 15;
  user-select: none;
  &__form {
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    padding: 1.5rem 3rem;
    background-color: black;
    border-radius: 20px;
    &--close {
      position: absolute;
      top: 10px;
      right: 20px;
      padding: 0.3rem;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        color: white;
      }
    }
    &--header {
      font: {
        family: "Pacifico", cursive;
        size: 1.6rem;
      }
      margin: 0;
    }
    &--info {
      display: flex;
      gap: 4rem;
      .personal-info {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}
.modal-anime {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0);
  }
  &-leave-active {
    transform: scale(0);
  }
}

/* Define styles for the root window with dark - mode preference */
:root.light-theme {
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-family: "Poppins", sans-serif;
    background-color: rgba(144, 193, 238, 0.5);
    overflow: hidden;
    z-index: 15;
    user-select: none;
    &__form {
      flex-basis: 45%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: relative;
      padding: 1.5rem 3rem;
      background-color: rgb(181, 225, 255);
      border-radius: 20px;
      &--close {
        position: absolute;
        top: 10px;
        right: 20px;
        padding: 0.3rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          color: white;
        }
      }
      &--header {
        font: {
          family: "Pacifico", cursive;
          size: 1.6rem;
        }
        margin: 0;
      }
      &--info {
        display: flex;
        gap: 4rem;
        .personal-info {
          flex-basis: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
    }
  }
}

.card {
  padding: 2rem 4rem;
  height: 200px;
  width: 300px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}

.switch-checkbox {
  display: none;
}

// :root {
//   --background-color-primary: #ebebeb;
//   --background-color-secondary: #fafafa;
//   --accent-color: #cacaca;
//   --text-primary-color: #222;
//   --element-size: 4rem; /* <- this is the base size of our element */
// }

.switch-label {
  /* for width, use the standard element-size */
  width: var(--element-size);
  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  padding: calc(var(--element-size) * 0.1);
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);

  align-items: center;
  background: var(--text-primary-color);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>
