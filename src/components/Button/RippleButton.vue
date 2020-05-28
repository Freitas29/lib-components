<template>
  <styled-button
    ref="tiBtn"
    @click="animateRipple"
    :background="backgroundColor"
    :ripple="rippleColor"
    :animation="animation"
    :height="height"
    :width="width"
    :radius="radius"
    :fontSize="fontSize"
  >
    {{ text }}

    <label v-if="ripples">
      <span
        v-bind:ref="'ripple-' + i"
        v-for="(val, i) in ripples"
        :key="i"
        v-bind:style="{ top: val.y + 'px', left: val.x + 'px' }"
        v-on:animationend="rippleEnd(i)"
      >
      </span>
    </label>
  </styled-button>
</template>

<script>
import StyledButton from "./StyledButton";

export default {
  components: {
    StyledButton
  },
  props: {
    text: {
      type: String,
      default: () => "Click"
    },
    backgroundColor: {
      type: String,
      default: () => "#003049"
    },
    rippleColor: {
      type: String,
      default: () => "#ff6b6b"
    },
    animation: {
      type: Number,
      default: () => 1000
    },
    height: {
      type: String,
      default: () => "40px"
    },
    width: {
      type: String,
      default: () => "100px"
    },
    radius: {
      type: Number,
      default: () => 5
    },
    fontSize: {
      type: String,
      default: () => "1.5rem"
    }
  },
  data: function() {
    return {
      ripples: []
    };
  },
  methods: {
    animateRipple(e) {
      let el = this.$refs.tiBtn.$el;
      let pos = el.getBoundingClientRect();

      this.ripples.push({
        x: e.clientX - pos.left,
        y: e.clientY - pos.top
      });
    },
    rippleEnd: function(i) {
      this.ripples.splice(i, 1);
    }
  }
};
</script>
