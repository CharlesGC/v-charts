import { boxplot } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeBoxplot',
  data () {
    this.chartHandler = boxplot
    return {}
  }
})
