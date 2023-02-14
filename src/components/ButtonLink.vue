<template>
  <div class="button">
    <div class="button__wrapper">
      <div class="button__arrow"></div>
      <div class="button__border-circle"></div>
      <div class="button__mask-circle">
        <div class="button__small-circle"></div>
      </div>
    </div>
    <div class="button__text">
      <RouterLink to="/">
        <div class="button__text">{{ $t("buttons.home") }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ButtonLink",
};
</script>

<style lang="scss" scoped>
$color_grey: #BFBFBF;
$color_blue: #2ccdd8;
$color_light: #FAFAFA;
$color_background: #2D3235;
$default_timer: 987ms;
  
.button {
  display: flex;
  cursor: pointer;
  margin-left: 3%;
  margin-top: 2%;
  &:hover {
    & .button__border-circle { 
      transform: translateX(60px);
    }
    & .button__mask-circle {
      clip-path: circle(25px at 85px);
    }
  }
}

.button__text {
  font-size: 24px;
  margin-left: 4%;
  margin-top: 2px;
  color: $color_light;
  letter-spacing: 0.1em;
  a {
    text-decoration: none;
  }
  a:hover {
    text-shadow: 6px 6px 16px rgba(51, 203, 252, 0.8);
  }
}

.button__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.button__arrow {
  left: 35px;
  height: 3px;
  width: 50px;
  display: flex;
  position: absolute;
  align-items: center;
  background-color: $color_blue;
  &:after {
    content: '';
    width: 0; 
    height: 0; 
    top: -5px;
    right: -7px;
    position: absolute;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid $color_blue;
  }
}

.button__border-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid $color_grey;
  transition: transform $default_timer;
}

.button__mask-circle {
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: circle(25px);
  transition: clip-path $default_timer;
}

.button__small-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: translateX(60px);
  background-color: $color_blue;
  box-shadow: 5px 5px 18px rgba(51, 203, 252, 0.9);
}

</style>