<script lang="ts">
import { ref, defineComponent, toRefs, reactive } from "vue";
export default defineComponent({
  methods: {
    toggleApi() {
      this.$fullscreen.toggle();
    },
  },
  setup() {
    const root = ref();
    const state = reactive({
      fullscreen: false,
    });
    function toggle() {
      state.fullscreen = !state.fullscreen;
    }
    return {
      root,
      ...toRefs(state),
      toggle,
    };
  },
});
</script>
