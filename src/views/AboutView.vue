<template>
  <div v-once class="about-page">
    <ButtonLink />
    <h2>ABOUT</h2>
    <div class="about-text">
      <p>
        The replica of the popular digital game <strong>Star Realms</strong> is
        now available, letting users enjoy the authentic Star Realms experience
        on their mobile devices and home computers.
      </p>
      <p>
        The game features a variety of ways to play, including an immersive
        single-player campaign mode, thrilling battles.
      </p>
    </div>
    <address class="authors-section">
      <h4 class="authors-section__heading">Created by:</h4>
      <GithubLink name="RichGihratik" />
      <GithubLink name="Dudarik" />
      <GithubLink name="KarinaKold" />
      <p class="authors-section__footer">for RS School</p>
    </address>
    <img src="../assets/sky.png" alt="sky" />
    <div class="footer">
      <span class="year">2023</span>
      <span class="year">All rights reserved</span>
      <a class="a course-link" href="https://rs.school/js">
        <img
          class="course-link__logo"
          src="https://rs.school/images/rs_school_js.svg"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GithubLink from "@/components/SetLink.vue";
import ButtonLink from "@/components/ButtonLink.vue";
</script>

<style scoped lang="scss">
.about-page {
  background-color: black;
  color: white;
  height: 100vh;
  overflow: hidden;
}

:root.light-theme {
  .about-page {
    background-color: rgb(183, 247, 255);
    color: rgb(30, 37, 46);
    height: 100vh;
    overflow: hidden;
  }
}

h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
}

.about-text {
  margin: 0 auto;
  font-family: "Viga";
  font-weight: 400;
  font-size: 3rem;
  line-height: 4rem;
  p {
    padding: 20px 40px;
  }
}
.course-link {
  &__logo {
    width: 90px;
    padding-top: 20px;
  }
}
.year {
  font-size: 1.2rem;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  align-self: center;
  text-align: center;
}
.authors-section {
  &__heading {
    font-size: 1.5rem;
    margin: 0;
    font-family: "Pacifico", cursive;
    font-weight: 300;
  }
}

h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 250px;
}

.authors-section__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 250px;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 10vw;
  height: 80px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  color: black;
  background: linear-gradient(60.24deg, #039eaf -0.61%, #33405a 100%);
}
</style>
