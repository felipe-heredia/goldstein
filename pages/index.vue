<template>
  <div>
    <Header />

    <div v-if="status === 'authed'" class="content">
      <div class="swap">
        <div class="swap-content">
          <div class="item">
            <Waves class="logo" />
            <span>Waves</span>
            <input type="text" />
          </div>

          <div class="trade">
            <ChevronsUpDown />
            1 WAVES = ~ 14.5881 USDN
          </div>

          <div class="item">
            <Usdn class="logo" />
            <span>Usdn</span>
            <input type="text" />
          </div>

          <button class="submit-button">Swap</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronsUpDown } from 'lucide-vue'
import Waves from '@/static/img/waves.svg'
import Usdn from '@/static/img/usdn.svg'

export default {
  components: {
    ChevronsUpDown,
    Waves,
    Usdn,
  },

  data() {
    return {
      status: '',
    }
  },

  mounted() {
    const address = localStorage.getItem('@GOLDSTEIN:userAddress')

    if (address) {
      this.status = 'authed'
    }
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

    .swap-content {
      padding: 2rem;

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
          @apply rounded-2xl;

          width: 4rem;
          border: 1px solid #e5e7eb;
        }

        span {
          @apply text-gray-600;
          text-transform: uppercase;
          font-weight: 600;
        }

        input {
          @apply rounded-2xl;
          padding: 1rem 2rem;
          border: 1px solid #fcd34d;
          outline: none;
        }
      }

      .trade {
        display: flex;
        margin: 1.5rem 0 1.5rem 1rem;

        svg {
          width: 1.8rem;
          height: 1.8rem;
          margin-right: 1rem;
        }
      }

      button.submit-button {
        @apply bg-amber-300 rounded-2xl;
        padding: 1rem 0;
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
}
</style>
