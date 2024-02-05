export const code:string = `const switchIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAUZJREFUWEftV0FugzAQ3JX8jyZnLxJPCD9JXpL2JU1ekj4BieWc/AMkt4tiBBaii0VLDubMrMdj784YYeMPN14fEoFeAWvtJwAcEHGnORbn3AMRr8aYS1mWDw1m6p+OABHdZPHIIh/M/B6JBczzfNe27d0XcM5dlMV6tYwx+1gVMMuyo3NO5JdPvZshDhFPVVVpiY/2NyKwpFAikBSYUoCIDnKh52ZJOD9WvYREJPPgrGzjruNWJfCcKdLWbzMkRvNjVQKanYdHlwgkBV5TAWmnpmluUwNF7Lqu61PsKFZ1wRyBn+DyxczFnxKI6WdtHlAp8K8ExEAAQDIhiFGIxBoCQYAtmFmFC/yi6EKptfauTcNT5JjZh9tf3XCIF5wHLnGxcaYb5MElbujjX/8ueB6F7GDOycLFr0PplW4I8p7wuPQ021yBb/YfzKoaOS2BAAAAAElFTkSuQmCC"
let data = {
   xdata: [
      '0-4点', '4-8点', '8-12点', '12-16点', '16-20点', '20-0点'
   ],
   develop: [
      100, 200, 300, 100, 150, 220
   ],
   complaint: [
      50, 10, 15, 20, 25, 30
   ],
}

let valueAxis = [
   {
      type: 'value',
      splitNumber: 10,      //分割段数 就是展示 10个 y的label刻度值
      splitLine: {
         show: true,
         lineStyle: {
            color: ['#cdd2de'],
            type: 'dashed'
         }
      },
      axisLine: {
         show: false
      },
      axisTick: {
         show: false
      }
   },
   {
      type: 'value',
      splitNumber: 10,
      axisLine: {
         show: false
      },
      axisTick: {
         show: false
      },
      splitLine: {
         show: true,
         lineStyle: {
            color: ['#cdd2de'],
            type: 'dashed'
         }
      }
   }
]

let categoryAxis = [
   {
      type: 'category',
      data: data.xdata,
   },
]

let colors = [
   {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
         offset: 0, color: '#fec51d' // 0% 处的颜色
      }, {
         offset: 1, color: '#f33826' // 100% 处的颜色
      }],
      global: false // 缺省为 false
   },
   '#cb75f1'
]
option = {
   title: {
      text: '{switchIcon|}',
      textStyle: {
         rich: {
            switchIcon: {
               width: 32,
               height: 32,
               backgroundColor: {
                  image: switchIcon,
                  replace: 'no-replace'
               }
            }
         }
      }
   },
   backgroundColor: "#fff",
   legend: {},
   tooltip: {
      trigger: 'axis',
      show: true,
   },
   color: colors,
   xAxis: categoryAxis,
   yAxis: valueAxis,
   series: [
      {
         type: 'bar',
         name: '发展量',
         barWidth: 20,
         id: 'valueBar',
         data: data.develop,
      },

      {
         type: 'line',
         name: '投诉量',
         data: data.complaint,
         smooth: true,
         symbolSize: 10,
         yAxisIndex: 1,
         id: 'valueLine',
         lineStyle: {
            type: 'solid',
            width: 3,
         }
      },
   ]
};

let orient = 'horizontal';
const orientOfData = (_o) => {
   let option_ = myChart.getOption();
   myChart.clear();
   requestAnimationFrame(() => {
      if (_o == 'horizontal') {
         categoryAxis[0]['axisLabel']={
            rotate:0
         }
         option_.yAxis = valueAxis;
         option_.xAxis = categoryAxis;
         option_.series[0].xAxisIndex = 0;
         option_.series[0].yAxisIndex = 0;
         option_.series[1].xAxisIndex = 0;
         option_.series[1].yAxisIndex = 1;
         myChart.setOption(option_)
      } else if (_o == 'vertical') {
         categoryAxis[0]['axisLabel']={
            rotate:-90
         }
         option_.yAxis = categoryAxis;
         option_.xAxis = valueAxis;
         option_.series[0].xAxisIndex = 0;
         option_.series[0].yAxisIndex = 0;
         option_.series[1].xAxisIndex = 1;
         option_.series[1].yAxisIndex = 0;
         myChart.setOption(option_)
      }
   })

}


let orientMap = {
   'horizontal': 'vertical',
   'vertical': 'horizontal'
}

myChart.getZr().on('click', (e) => {
   let flat = e.topTarget?.parent?.style?.text == '{switchIcon|}';
   if (flat) {
      orient = orientMap[orient]
      orientOfData(orient)
   }
})`