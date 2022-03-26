import { tree } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeTree',
  data () {
    this.chartHandler = tree
    return {}
  }
})
