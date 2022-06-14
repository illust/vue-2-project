<template>
	<div ref="myChart" id="myChart" class="screen-map"></div>
</template>
<script>
import gzData from '../../assets/json/data.json'
import { getMap } from '@/request/api_screen';
export default {
  name: "screen-map",
  data() {
    return {
		res: [],
		mockData: [],
      mTime: '',
			charts: '',
			index: -1,
			option: {
				tooltip: { // 窗口外框
					backgroundColor: 'rgba(0,0,0,0)',
					trigger: 'item',
				},
				// legend: { // 注释掉有文字
				// 	show: false,
				// },
				series: [{
					tooltip: { // 显示的窗口
						trigger: 'item',
						formatter: function (item) {
							console.log("item",item);
							var tipHtml = '';
							tipHtml = `<div style="padding: .6rem .8rem;font-size: .325rem;color:#fff;border-radius:10%;background: linear-gradient(#cccecf, #cccecf) left top,
									linear-gradient(#cccecf, #cccecf) left top,
									linear-gradient(#cccecf, #cccecf) right top,
									linear-gradient(#cccecf, #cccecf) right top,
									linear-gradient(#cccecf, #cccecf) left bottom,
									linear-gradient(#cccecf, #cccecf) left bottom,
									linear-gradient(#cccecf, #cccecf) right bottom,
									linear-gradient(#cccecf, #cccecf) right bottom;
							background-repeat: no-repeat;
							background-size: .08rem .3rem, .3rem .08rem;background-color:rgba(6, 79, 111,.6);">${item.data.name} <br /><span style="color:#f9eb59;font-size:.4rem">${item.data.value} 家</span><br /><span style="color:#f9eb59;font-size:.4rem">产品名：${item.data.product}</span><br /><span style="color:#f9eb59;font-size:.4rem">客户名：${item.data.customer}</span></div>`;
							return tipHtml;
						},
						borderWidth: 0 
					},
					name: '中国地图数据',
					type: 'map',
					map: 'China', // 自定义扩展图表类型
					zoom: 0.65, // 缩放
					showLegendSymbol: true,
					label: { // 文字
						show: true,
						color: '#fff',
						fontSize: 10
					},
					itemStyle: { // 地图样式
						borderColor: 'rgba(147, 235, 248, 1)',
						borderWidth: 1,
						areaColor: {
							type: 'radial',
							x: 0.5,
							y: 0.5,
							r: 0.8,
							colorStops: [{
								offset: 0,
								color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
							}, {
								offset: 1,
								color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						},
						shadowColor: 'rgba(128, 217, 248, 1)',
						// shadowColor: 'rgba(255, 255, 255, 1)',
						shadowOffsetX: -2,
						shadowOffsetY: 2,
						shadowBlur: 10
					},
					emphasis: { // 鼠标移入动态的时候显示的默认样式
						itemStyle: {
							areaColor: '#4adcf0',
							borderColor: '#404a59',
							borderWidth: 1
						},
						label: { // 文字
							show: true,
							color: '#fff',
							fontSize: 10
						},
					},
					layoutCenter: ['50%', '50%'],
					layoutSize: '150%',
					markPoint: {
						symbol: 'none'
					},
					data: []
				}],
			}
    };
  },
  methods: {
    setMyEchart () {
		console.log("setMyEchart",this.option.series[0].data)
			const myChart = this.$refs.myChart; // 通过ref获取到DOM节点
			if (myChart) {
				const thisChart = this.$echarts.init(myChart); // 利用原型调取Echarts的初始化方法
				this.charts = thisChart;
				this.mapActive();
				this.mouseEvents();
				const option = this.option; // {}内写需要图表的各种配置，可以在官方案例中修改完毕后复制过来
				thisChart.setOption(option); // 将编写好的配置项挂载到Echarts上
				window.addEventListener('resize', function () {
					thisChart.resize(); // 页面大小变化后Echarts也更改大小
				});
			}
		},
		mouseEvents () {
			// 鼠标划入
			this.charts.on('mouseover', () => {
				// 停止定时器，清除之前的高亮
				clearInterval(this.mTime);
				this.mTime = '';
				console.log(this.mTime);
				this.charts.dispatchAction({
					type: 'downplay',
					seriesIndex: 0,
					dataIndex: this.index
				});
			});
			// 鼠标划出重新定时器开始
			this.charts.on('mouseout', () => {
				this.mapActive();
			});
		},
		// 高亮轮播
		mapActive () {
			const dataLength = this.option.series[0].data.length;
			// const dataLength = gzData.features.length;
			console.log("1: dataLength",dataLength);
			// 用定时器控制高亮
			this.mTime = setInterval(() => {
				// 清除之前的高亮
				this.charts.dispatchAction({
					type: 'downplay',
					seriesIndex: 0,
					dataIndex: this.index
				});
				this.index++;
				// 当前下标高亮
				this.charts.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: this.index
				});
				this.charts.dispatchAction({
					type: 'showTip',
					seriesIndex: 0,
					dataIndex: this.index
				});
				if (this.index > dataLength) {
					this.index = 0;
				}
			}, 2000);
		},
		getJson (res) {

			console.log('rrr',res);
			this.option.series[0].data = res.map((e) => { // 显示窗口的数据转换
				console.log("gdData: item",e);
				return {
					// name: e.PRODUCT_NAME + ' ' + e.CUSTOMER_NAME + ' ' + e.PROVINCE_NAME,
					name: e.PROVINCE_NAME,
					product: e.PRODUCT_NAME,
					customer: e.CUSTOMER_NAME,
					value: parseFloat(e.BUSINESS_SCALE)
				};
			})
			this.$nextTick(() => {
					this.setMyEchart(); // 页面挂载完成后执行
				})
		},
		getMap(){
			getMap({}).then(res => {
				this.option.series[0].data = res.map(e => {
					console.log("ChinaData: ",e);
					console.log("getMap2: this.option.series[0].data",this.option.series[0].data)
						return {
							name: e.PRODUCT_NAME + ' ' + e.CUSTOMER_NAME + ' ' + e.PROVINCE_NAME,
							value: parseFloat(e.BUSINESS_SCALE)
						}
				})
				// this.charts.setOption(this.option)
				// this.option.series[0].data
				console.log("getMap3: this.option.series[0].data",this.option.series[0].data)
				this.$nextTick(() => {
					this.setMyEchart(); // 页面挂载完成后执行
				})
			})
		}
  },
  mounted() {
	// this.getMap();
	// this.setMyEchart(); // 页面挂载完成后执行
  },
  created(){
	getMap({}).then(res => {
		this.getJson(res);
	})
    this.$echarts.registerMap('China', gzData);
	// this.getMap();
	console.log("1: created: this.option.series[0].data",this.option.series[0].data);
  }
};
</script>

<style  scoped>
.screen-map{
    width: 100%;
    height: 100%;
}
</style>
