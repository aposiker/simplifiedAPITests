export type ControllerOptions = {
  token?: string
  prefixUrl: URL
  projectId?: string
}

export class BaseController {
  protected readonly options: ControllerOptions
  constructor(options: ControllerOptions) {
    this.options = options
  }
}
