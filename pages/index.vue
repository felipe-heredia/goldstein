<template>
  <div>
    <Header @login="handleGetLoginData" />

    <div v-if="status === 'authed'" class="content">
      <div class="swap">
        <button class="submit-button" @click="invokeContract">
          Invoke Contract
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { globalSigner } from '@/data/auth'

export default {
  data() {
    return {
      status: '',
      address: '',
      signer: {},
    }
  },

  methods: {
    invokeContract() {
      globalSigner.signer
        .invoke({
          dApp: '3PPRHHF9JKvDLkAc3aHD3Kd5tRZp1CoqAJa',
        })
        .broadcast()
        .then((tx) => console.log(tx))
        .catch((tx) => console.log(JSON.stringify(tx)))
    },

    handleGetLoginData(data) {
      this.signer = data.signer
      this.status = data.status
      this.address = data.address
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  @apply w-full flex justify-center items-center;

  height: 90vh;

  .swap {
    @apply rounded-2xl;

    box-shadow: rgba(54, 56, 112, 0.16) 0px 8px 56px;
    background: #fff;
    width: 38rem;

    button.submit-button {
      @apply bg-amber-300 rounded-2xl;
      padding: 1rem 0;
      width: 100%;
    }
  }
}
</style>
