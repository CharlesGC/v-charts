import { candle } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeCandle',
  data () {
    this.chartHandler = candle
    return {}
  }
})
