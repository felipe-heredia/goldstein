import { Signer } from '@waves/signer'
import { ProviderWeb } from '@waves.exchange/provider-web'
import { ProviderCloud } from '@waves.exchange/provider-cloud'

class SignerWebHandler {
  signer

  constructor() {
    this.signer = new Signer({
      NODE_URL: 'https://nodes.wavesnodes.com',
    })
    this.signer.setProvider(new ProviderWeb('https://waves.exchange/signer/'))
  }
}

class SignerEmailHandler {
  signer

  constructor() {
    this.signer = new Signer()
    this.signer.setProvider(new ProviderCloud())
  }
}

const signerWeb = new SignerWebHandler()
const signerEmail = new SignerEmailHandler()

class GlobalSigner {
  signer
  authorizationMethod

  constructor() {
    this.authorizationMethod = localStorage.getItem('@GOLDSTEIN:authMethod')
    this.auth(this.authorizationMethod)
  }

  auth(authorizationMethod) {
    this.authorizationMethod = authorizationMethod

    if (authorizationMethod === 'email') {
      this.signer = signerEmail.signer
    } else if (authorizationMethod === 'seed') {
      this.signer = signerWeb.signer
    }

    localStorage.setItem('@GOLDSTEIN:authMethod', authorizationMethod)
  }

  logout() {
    localStorage.removeItem('@GOLDSTEIN:authMethod')
    localStorage.removeItem('@GOLDSTEIN:userAddress')

    window.location.reload()
  }
}

export let globalSigner = new GlobalSigner()
