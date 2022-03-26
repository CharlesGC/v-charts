import { bar } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeBar',
  data () {
    this.chartHandler = bar
    return {}
  }
})
