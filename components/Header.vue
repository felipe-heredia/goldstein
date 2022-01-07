<template>
  <header class="header">
    <h1>Goldstein</h1>

    <button class="connect-wallet" @click="showConnect = true">
      Connect wallet
    </button>

    <div class="modal" v-show="showConnect">
      <div class="modal-content">
        <header class="modal-header">
          <strong>Connect wallet</strong>
          <Error @click="showConnect = false" class="close" />
        </header>

        <div class="modal-body">
          <button class="login-method" @click="mailLogin">
            <Mail :size="20" />
            WavesExchange Email
          </button>
          <button class="login-method" @click="seedLogin">
            <Sprout :size="20" />
            WavesExchange Seed
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { globalSigner } from '@/data/auth'
import { X, Mail, Sprout } from 'lucide-vue'

export default {
  components: { Error: X, Mail, Sprout },

  data() {
    return {
      showConnect: false,
      signer: {},
      address: '',
      status: '',
    }
  },

  methods: {
    async seedLogin() {
      globalSigner.auth('seed')
      this.handleLogin(globalSigner.signer)
    },

    async mailLogin() {
      globalSigner.auth('email')
      this.handleLogin(globalSigner.signer)
    },

    async handleLogin(signer) {
      this.signer = signer
      signer
        .login()
        .then((data) => {
          this.address = data.address
          console.log(data)
        })
        .then(() => {
          localStorage.setItem('@GOLDSTEIN:userAddress', this.address)
          this.status = 'authed'
        })
    },
  },
}
</script>

<style lang="scss" scoped>
header.header {
  @apply h-20 px-60 shadow-lg bg-gray-50;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    @apply text-amber-400 text-2xl;
  }

  button.connect-wallet {
    @apply px-5 py-2 bg-amber-300 rounded-xl text-zinc-600;

    transition: all 1s;

    &:hover {
      @apply bg-amber-400 text-zinc-700 rounded-3xl;
    }
  }

  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);

    .modal-content {
      @apply rounded-xl bg-zinc-50;

      margin: 15% auto;
      border: 1px solid #888;
      width: 23rem;

      header.modal-header {
        @apply p-5 text-zinc-500;

        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #e4e4e7;

        strong {
          font-weight: 500;
        }

        .close {
          cursor: pointer;
        }
      }

      .modal-body {
        @apply p-5;

        button.login-method {
          @apply p-3.5 rounded-xl text-gray-600;

          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-size: 0.925rem;
          border: 1px solid #d4d4d8;
          transition: all 1s;

          svg {
            @apply text-amber-400;

            margin-right: 0.3rem;
            transition: all 1s;
          }

          &:not(last-child) {
            @apply mb-3.5;
          }

          &:hover {
            @apply text-zinc-700 bg-amber-400;

            svg {
              @apply text-zinc-700;
            }
          }
        }
      }
    }
  }
}
</style>
