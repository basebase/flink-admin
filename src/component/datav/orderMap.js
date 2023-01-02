import china from './china.json';
import * as echarts from 'echarts';

echarts.registerMap("china", china);


export const orderMapConfig = {
    title: {
        text: 'Population Density of Hong Kong （2011）',
        subtext: 'Data from Wikipedia',
    },
    
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (p / km2)'
    },

    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
    },

    visualMap: {
        min: 800,
        max: 50000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
    },

    geo: {
        map: "china",
        roam: false,// 一定要关闭拖拽
        zoom: 1.23,
        center: [105, 36], // 调整地图位置
        label: {
          normal: {
            show: false, //关闭省份名展示
            fontSize: "10",
            color: "rgba(0,0,0,0.7)"
          },
          emphasis: {
            show: false
          }
        },
    }
}