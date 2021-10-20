import { CONFIG } from '../config/env'
import { UserPetstoreController } from '../framework/controllers/UserPetstoreController'
import { ControllerOptions } from './controllers/baseController'

export class APIclient {
  public readonly user: UserPetstoreController

  constructor(options?: Partial<ControllerOptions>) {
    const defaultOptions = {
      prefixUrl: new URL(CONFIG.BASE_URL)
    }
    const mergedOptions = {
      ...defaultOptions,
      ...options
    }

    this.user = new UserPetstoreController(mergedOptions)
  }
  static unauthorized() {
    return new APIclient()
  }

  static async loginViaUserCreds(username: string, password: string) {
    return new APIclient({
      token: await APIclient.unauthorized().user.login(username, password)
    })
  }
}
