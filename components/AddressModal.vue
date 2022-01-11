<template>
  <div class="popover">
    <button @click="copyAddress(address)" class="item">Copy address</button>

    <a
      :href="`https://wavesexplorer.com/address/${address}`"
      target="_blank"
      class="item"
    >
      View in Waves Explorer
    </a>

    <button @click="logout()" class="item">Disconnect</button>
  </div>
</template>

<script>
export default {
  props: {
    logout: {
      type: Function,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },

  methods: {
    copyAddress(address) {
      navigator.clipboard.writeText(address)
    },
  },
}
</script>

<style lang="scss" scoped>
.popover {
  @apply p-3 bg-gray-50 shadow-2xl rounded-xl;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  z-index: 1;
  height: auto;
  right: 0;
  inset: 0 0 auto auto;
  transform: translate(-15rem, 3.5rem);

  .item {
    padding: 0.5rem 0;
    transition: all 0.8s;

    &:hover {
      @apply text-gray-500;
    }
  }
}
</style>
