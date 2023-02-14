<script lang="ts">
import { ref } from "vue";
import { cards } from "@/mock/cards";
import ButtonLink from "@/components/ButtonLink.vue";

export default {
  setup() {
    const items = ref(cards);
    const zones = ref([
      {
        id: 0,
        title: "TradeRow",
      },
      {
        id: 1,
        title: "TradeHand",
      },
    ]);
    function onDragStart(e: DragEvent, item) {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("itemId", item.id.toString());
      }
    }
    function onDrop(e: DragEvent, zoneId: number) {
      if (e.dataTransfer) {
        const itemId = parseInt(e.dataTransfer.getData("itemId"));
        items.value = items.value.map((x) => {
          if (x.id == itemId) x.zoneId = zoneId;
          return x;
        });
      }
    }
    return {
      items,
      zones,
      onDragStart,
      onDrop,
    };
  },
};
</script>

<template>
  <main>
    <ButtonLink />
    <div>Player 2</div>
    <div class="explorers">explorers</div>
    <div class="zones">
      <div
        v-for="zone in zones"
        :key="zone.id"
        @drop="onDrop($event, zone.id)"
        @dragover.prevent
        @dragenter.prevent
        class="droppable"
      >
        <div
          v-for="item in items.filter((x) => x.zoneId === zone.id)"
          :key="item"
          @dragstart="onDragStart($event, item)"
          draggable="true"
          class="draggable"
        >
          <h5>{{ item.name }}</h5>
        </div>
      </div>
    </div>
    <div class="trade-deck">trade-deck</div>
    <div class="authority">authority</div>
    <div class="deck">deck</div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background: #2c3e50;
  color: rgb(51, 131, 35);
  width: 100vw;
  height: 100vh;
  padding: 20px;
}

.zones {
  height: 50%;
  width: 50%;
  margin: 0 auto;
  background-color: rgb(165, 190, 119);
}
.droppable {
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-radius: 5px;
  margin: 10px;
  height: 200px;
}

.droppable:hover {
  background: rgb(124, 173, 228, 0.5);
}

.draggable {
  background: white;
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
  width: 100px;
}

.draggable:active {
  background: rgb(170, 77, 77);
}
</style>
