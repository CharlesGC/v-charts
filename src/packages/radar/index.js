import { radar } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeRadar',
  data () {
    this.chartHandler = radar
    return {}
  }
})
