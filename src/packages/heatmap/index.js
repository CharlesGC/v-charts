import 'echarts/extension/bmap/bmap'
import { heatmap } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'VeHeatmap',
  data () {
    this.chartHandler = heatmap
    return {}
  }
})
