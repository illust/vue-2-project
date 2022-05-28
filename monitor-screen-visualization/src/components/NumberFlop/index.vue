<template>
  <div class="dv-digital-flop">
    <canvas ref="digital-flop" />
    <div class="flop-background" ref='flop-background'></div>
  </div>
</template>

<script>
import CRender from '@jiaminghi/c-render'

import '@jiaminghi/charts/lib/extend/index'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

export default {
  name: 'number-flop',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      renderer: null,

      defaultConfig: {
        /**
         * @description Number for digital flop
         * @type {Array<Number>}
         * @default number = []
         * @example number = [10]
         */
        number: [],
        /**
         * @description Content formatter
         * @type {String}
         * @default content = ''
         * @example content = '{nt}个'
         */
        content: '',
        /**
         * @description Number toFixed
         * @type {Number}
         * @default toFixed = 0
         */
        toFixed: 0,
        /**
         * @description Text align
         * @type {String}
         * @default textAlign = 'center'
         * @example textAlign = 'center' | 'left' | 'right'
         */
        textAlign: 'center',
        /**
         * @description rowGap
         * @type {Number}
         @default rowGap = 0
         */
        rowGap: 0,
        /**
         * @description Text style configuration
         * @type {Object} {CRender Class Style}
         */
        style: {
          fontSize: 30,
          fill: '#3de7c9'
        },
        /**
         * @description Number formatter
         * @type {Null|Function}
         */
        formatter: undefined,
        /**
         * @description CRender animationCurve
         * @type {String}
         * @default animationCurve = 'easeOutCubic'
         */
        animationCurve: 'easeOutCubic',
        /**
         * @description CRender animationFrame
         * @type {String}
         * @default animationFrame = 50
         */
        animationFrame: 50
      },

      mergedConfig: null,

      graph: null
    }
  },
  watch: {
    config () {
      const { update } = this

      update()
    }
  },
  methods: {
    init () {
      const { initRender, mergeConfig, initGraph, setBackgroundImg } = this

      initRender()

      mergeConfig()

      initGraph()

      setBackgroundImg ()
    },
    initRender () {
      const { $refs } = this

      this.renderer = new CRender($refs['digital-flop'])

    },
    mergeConfig () {
      const { defaultConfig, config } = this

      console.log("config",config);

      this.mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})

      console.log("this.mergedConfig",this.mergedConfig);
    },
    initGraph () {
      const { getShape, getStyle, renderer, mergedConfig } = this

      const { animationCurve, animationFrame } = mergedConfig

      const shape = getShape()
      const style = getStyle()

      this.graph = renderer.add({
        name: 'numberText',
        animationCurve,
        animationFrame,
        shape,
        style
      })
    },
    getShape () {
      const { number, content, toFixed, textAlign, rowGap, formatter, style } = this.mergedConfig

      this.renderer.area = style.area   // add area

      const [w, h] = this.renderer.area

      const position = [w / 2, h / 2]

      if (textAlign === 'left') position[0] = 0
      if (textAlign === 'right') position[0] = w

      return {
        number,
        content,
        toFixed,
        position,
        rowGap,
        formatter
      }
    },
    getStyle () {
      const { style, textAlign } = this.mergedConfig

      return deepMerge(style, {
        textAlign,
        textBaseline: 'middle'
      })
    },
    update () {
      const { mergeConfig, mergeShape, getShape, getStyle, graph, mergedConfig } = this

      graph.animationEnd()

      mergeConfig()

      if (!graph) return

      const { animationCurve, animationFrame } = mergedConfig

      const shape = getShape()
      const style = getStyle()

      mergeShape(graph, shape)

      graph.animationCurve = animationCurve
      graph.animationFrame = animationFrame

      graph.animation('style', style, true)
      graph.animation('shape', shape)
    },
    mergeShape (graph, shape) {
      const cacheNum = graph.shape.number.length
      const shapeNum = shape.number.length

      if (cacheNum !== shapeNum) graph.shape.number = shape.number
    },

    setBackgroundImg () {
      const {mergedConfig } = this
      const {imgSrc, imgStyle, number}= mergedConfig
      const el =  this.$refs['flop-background']

      var num = number[0].toFixed(0)

      var cnt = 0
      while(num){
        cnt++
        num = parseInt(num / 10)
      }

      if(imgSrc && imgStyle){
        var image = new Image()
        image.src = imgSrc
        image.style = imgStyle

        // add split symbol background between numbers
        var spaceNode = document.createElement("div")
        spaceNode.style = "width:42px;height:120px;opacity:0;background-color:green;"

        if(cnt % 3 == 0){
          for(var i = 0; i < 3; i++){
            el.appendChild(image.cloneNode(true))
          }
          for(var j = 0; j < (cnt/3-1); j++){
            el.appendChild(spaceNode.cloneNode(true))
            for(var k = 0; k < 3; k++){
              el.appendChild(image.cloneNode(true))
            }
          }
        }else if(cnt % 3 == 1){
            console.log("middle cnt",cnt);
            el.appendChild(image.cloneNode(true))
            for(var m = 0; m < parseInt(cnt/3); m++){
              console.log("spacenode?");
              el.appendChild(spaceNode.cloneNode(true))
              for(var n = 0; n < 3; n++){
                el.appendChild(image.cloneNode(true))
              }
          }
        }else{
            el.appendChild(image.cloneNode(true))
            el.appendChild(image.cloneNode(true))
            for(var l = 0; l < parseInt(cnt/3); l++){
              el.appendChild(spaceNode.cloneNode(true))
              for(var p = 0; p < 3; p++){
                el.appendChild(image.cloneNode(true))
              }
          }
        }
        el.appendChild(spaceNode.cloneNode(true))
        el.appendChild(image.cloneNode(true))
        el.appendChild(image.cloneNode(true))

      }
    }

  },
  mounted () {
    const { init } = this

    init()
  }
}
</script>

<style lang="less">
.dv-digital-flop {

  canvas {
    width: 100%;
    height: 100%;
  }

  .flop-background{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -130px;
  }
}
</style>