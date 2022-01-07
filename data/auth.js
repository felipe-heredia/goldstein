import { Signer } from '@waves/signer'
import { ProviderWeb } from '@waves.exchange/provider-web'
import { ProviderCloud } from '@waves.exchange/provider-cloud'

export class SignerWebHandler {
  signer

  constructor() {
    this.signer = new Signer({
      NODE_URL: 'https://nodes.wavesnodes.com',
    })
    this.signer.setProvider(new ProviderWeb('https://waves.exchange/signer/'))
  }
}

export class SignerEmailHandler {
  signer

  constructor() {
    this.signer = new Signer()
    this.signer.setProvider(new ProviderCloud())
  }
}

export const signerWeb = new SignerWebHandler()
export const signerEmail = new SignerEmailHandler()

export class GlobalSigner {
  signer
  authorizationMethod

  constructor() {
    this.authorizationMethod = localStorage.getItem('@GOLDSTEIN:authMethod')
    this.auth(this.authorizationMethod)
  }

  auth(authorizationMethod) {
    this.authorizationMethod = authorizationMethod

    if (authorizationMethod == 'email') {
      this.signer = signerEmail.signer
    } else if (authorizationMethod == 'seed') {
      this.signer = signerWeb.signer
    } else {
      //this.signer = signerKeeper.signer
    }

    localStorage.setItem('@GOLDSTEIN:authMethod', authorizationMethod)
    console.log('initialized with', authorizationMethod)
  }

  logout() {
    localStorage.removeItem('@GOLDSTEIN:authMethod')
    localStorage.removeItem('@GOLDSTEIN:userAddress')

    window.location.reload()
  }
}

export let globalSigner = new GlobalSigner()
