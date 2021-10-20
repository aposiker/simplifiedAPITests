import { operations } from '../../.types/types'
import { AllureStep } from '../lib/allureStep'
import { BuildRequest } from '../lib/requestBuilder'
import { BaseController } from './baseController'

export class UserPetstoreController extends BaseController {
  @AllureStep('[UserPetstoreController] create user')
  async createUser(
    data: operations['createUser']['parameters']['body']['body']
  ) {
    const resp = await new BuildRequest('/user')
      .prefixUrl(this.options.prefixUrl)
      .url('user')
      .method('POST')
      .body(data)
      .send<operations['createUser']['responses']['default']>()

    return resp.body
  }
  @AllureStep('[UserPetstoreController] update user')
  async updateUser(
    username: operations['updateUser']['parameters']['path']['username'],
    data: operations['updateUser']['parameters']['body']['body']
  ) {
    const resp = await new BuildRequest('/user/{username}')
      .prefixUrl(this.options.prefixUrl)
      .url(`user/${username}`)
      .method('PUT')
      .body(data)
      .send()

    return resp.body
  }

  @AllureStep('[UserPetstoreController] login user')
  async login(
    username: operations['loginUser']['parameters']['query']['username'],
    password: operations['loginUser']['parameters']['query']['password']
  ) {
    const resp = await new BuildRequest('/user/login')
      .prefixUrl(this.options.prefixUrl)
      .url('user/login')
      .method('GET')
      .searchParams({ username, password })
      .send()

    return resp.body
  }

  @AllureStep('[UserPetstoreController] delete user')
  async deleteUser(
    username: operations['deleteUser']['parameters']['path']['username']
  ) {
    const resp = await new BuildRequest('/user/{username}')
      .prefixUrl(this.options.prefixUrl)
      .url(`user/${username}`)
      .method('DELETE')
      .send()

    return resp.body
  }
}
