<script setup lang="ts">
import ButtonLink from "@/components/ButtonLink.vue";
</script>

<template>
  <div class="container">
    <ButtonLink />
    <div class="page-title">
      <h2>{{ $t("titles.rulesTitle") }}</h2>
    </div>

    <div class="container-wrapper">
      <div class="container__content">
        <p>Overview</p>
        <p>
          In Star Realms, you start with a Personal Deck of cards representing
          your space armada. Each turn, you play all the cards in your hand to
          gain Trade, Combat, Authority and other effects. Trade ( ) is used to
          buy powerful Ships and Bases from the Trade Row and put them into your
          Discard Pile. Combat ( ) is used to attack opponents and their Bases.
          Authority ( ) is your score. Each player begins the game with 50
          Authority. At the end of your turn, draw a new hand of five cards.
          When you run out of cards, shuffle your Discard Pile (including all
          the new cards you’ve bought) to form a new Personal Deck. The first
          player to reduce their opponent’s Authority to zero wins! Setup Set
          the oversized cards aside. You will only use them when playing a solo
          or cooperative challenge (see page 22). Each player begins the game
          with a Personal Deck (containing 8 Scout cards and 2 Viper cards) and
          a starting score of 50 Authority. To set up the game, place the 16
          Explorer cards in their own pile face-up on the table. Shuffle the
          Trade Deck
        </p>
        <p>Play</p>
        <p>Players alternate taking turns. Each turn has three phases:</p>
        <ol>
          <li>Main Phase</li>
          <li>Discard Phase</li>
          <li>Draw Phase</li>
        </ol>
        <p>Main Phase</p>
        <p>
          At any time during your Main Phase you may perform any of the
          following actions, as many times as you like, in any order you wish:
        </p>
        <ul>
          <li>Play cards from your hand.</li>
          <li>Use the Primary Abilities of in-play Bases.</li>
          <li>Use the Ally/Scrap abilities of in-play Ships and Bases.</li>
          <li>Use Trade to acquire new cards from the Trade Row.</li>
          <li>Use Combat to attack an opponent and/or their Bases.</li>
        </ul>
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
  padding: 30px;
  color: #fff;
  width: 1880px;
  height: 780px;
}

:root.light-theme {
  .container {
    background: rgb(111, 145, 185);
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
    background-color: rgba(232, 243, 255, 0.4);
    padding: 30px;
    color: #202020;
    width: 1880px;
    height: 780px;
  }
}
</style>
