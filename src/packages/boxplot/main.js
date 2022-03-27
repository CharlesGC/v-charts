import { itemPoint } from '../../constants'
import { getFormated, getStackMap } from '../../utils'
import { set, get, cloneDeep } from 'utils-lite'

function getBoxplotXAxis (args) {
  const { xAxisName, axisVisible, xAxisType, rows, dataLabels, dimension } = args
  const data = []
  dataLabels.forEach(dataLabel => {
    const itemData = rows[dataLabel]
    itemData.forEach(item => {
      const name = item[dimension]
      if (name && !~data.indexOf(name)) data.push(name)
    })
  })

  return [{
    type: xAxisType,
    show: axisVisible,
    name: xAxisName,
    data
  }]
}

function getBoxplotYAxis (args) {
  const {
    min,
    max,
    scale,
    yAxisName,
    dataType,
    metrics,
    digit,
    axisVisible
  } = args

  return {
    type: 'value',
    show: axisVisible,
    scale,
    min,
    max,
    axisTick: { show: false },
    name: yAxisName,
    axisLabel: {
      formatter (val) { return getFormated(val, dataType[metrics[0]], digit) }
    }
  }
}

function getBoxplotSeries (args) {
  const {
    rows,
    dataLabels,
    columns,
    metrics,
    dimension
  } = args
}

const boxplot = (columns, rows, settings, extra) => {
  const {
    dimension = columns[0],
    metrics = [columns[1]],
    axisVisible = true
  } = settings

  const dataLabels = Object.keys(rows)

  const xAxis = getBoxplotXAxis({

  })

  const yAxis = getBoxplotYAxis({
    axisVisible
  })

  const series = getBoxplotSeries({
    rows,
    dataLabels,
    columns,
    metrics,
    dimension
  })

  const options = { xAxis, yAxis, series }
  return options
}

export { boxplot }
