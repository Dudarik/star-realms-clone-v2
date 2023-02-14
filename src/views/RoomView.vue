<script setup lang="ts">
import ButtonLink from "@/components/ButtonLink.vue";
// import { mapGetters, mapActions } from 'vuex'

// const name = {
//   data: {
//     name: '',
//   },
// validations: {
//   name: { required }
// },
//   mounted() {
//     if (localStorage.name) {
//         this.name = this.localStorage.name;
//     }
//   },
//   watch: {
//     name(newName: string) {
//         localStorage.name = newName;
//     }
//   },
//   methods: {
//     update() {
//         this.name = this.localStorage.name;
//     }
//   }
// }
</script>

<template>
  <div class="container">
    <ButtonLink />
    <div class="page-title">
      <h2>{{ $t("titles.roomTitle") }}</h2>
    </div>

    <div class="container-wrapper">
      <div class="container__content">
        <form class="form" @submit.prevent>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">Name</label>
            <span class="helper-text invalid">name</span>
          </div>
          <button class="form__btn" type="submit" @submit.prevent>
            {{ $t("buttons.update") }}
          </button>
        </form>
        <div class="container__content_users">
          <div class="user-name"></div>
        </div>
        <RouterLink to="/game">{{ $t("buttons.game") }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: rgb(1, 17, 36);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.container-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__content {
  background-color: rgba(212, 224, 238, 0.2);
  width: 1880px;
  height: 780px;
}

$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;

form {
  padding: 10px 20px;
  display: flex;
}

.form__btn {
  font-size: 20px;
  text-transform: uppercase;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  margin-top: 35px;
  background: transparent;
  border: transparent;
  border-bottom-color: #1dd3c4;
  color: white;
  transition: border-color 0.3s;
  cursor: pointer;
  &:hover {
    border-image: linear-gradient(to right, $primary, $secondary);
    box-shadow: 3px 3px 10px $secondary;
  }
}
.form__group {
  position: relative;
  padding: 15px 15px;
  margin-top: 10px;
  max-width: 300px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}

.container__content_users {
  background: rgba(1, 7, 15);
  width: 1600px;
  height: 600px;
}

:root.light-theme {
  .container {
    background: rgb(78, 112, 150);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .container__content {
    background-color: rgba(255, 255, 255, 0.1);
    width: 1880px;
    height: 780px;
  }
  .container__content_users {
    background: rgb(255, 255, 255);
    width: 1600px;
    height: 600px;
  }
}
</style>
