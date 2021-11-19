import { APIclient } from '../framework/apiClient'

describe('Basic API test', () => {
  let authorizedAPIclient: APIclient
  before('suite setup', async function () {
    authorizedAPIclient = await APIclient.loginViaUserCreds(
      'JohnDoe',
      'password'
    )
  })
  beforeEach('test setup', async function () {
    await authorizedAPIclient.user.createUser({
      id: Date.now(),
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@nowhere.com',
      password: 'pass',
      phone: '111',
      userStatus: 0
    })
  })
  after('suite tear down', async function () {
    await authorizedAPIclient.user.deleteUser('johndoe')
  })

  it('should update new user', async () => {
    await authorizedAPIclient.user.updateUser('johndoe', {
      id: Date.now(),
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@nowhere.com',
      password: 'pass',
      phone: '111',
      userStatus: 0
    })
  })

  it('should update user again', async () => {
    await authorizedAPIclient.user.updateUser('johndoe', {
      id: Date.now(),
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@nowhere.com',
      password: 'pass',
      phone: '111',
      userStatus: 0
    })
  })
})
