<template>
   <div class="category">
          <div
            v-for="(cell, cellIdx) in gridWidth"
            :key="`${cellIdx + 1}:${rowIdx + 1}`"
            :class="['cell', ...getCellClass(rowIdx, cellIdx)]"
            :style="getCellStyle(rowIdx, cellIdx)"
          >
            <cell
              :class="{
                hovered: hoveredCells.includes(`${cellIdx + 1}:${rowIdx + 1}`),
                red: twoLetterWords.includes(`${cellIdx + 1}:${rowIdx + 1}`),
                yellow: threeLetterWords.includes(`${cellIdx + 1}:${rowIdx + 1}`),
              }"
              :value="letters[`${cellIdx + 1}:${rowIdx + 1}`]"
              :x="cellIdx + 1"
              :y="rowIdx + 1"
              :number="getNumber(cellIdx + 1, rowIdx + 1)"
              :is-blank="blanks.includes(`${cellIdx + 1}:${rowIdx + 1}`)"
              :is-active="active.cell === `${cellIdx + 1}:${rowIdx + 1}`"
              @keyup.exact="onKeyUp"
              @keyup.left.up="onLeftPress"
              @cellclick="onCellClick"
              @cellinput="goNextCell"
              @cellmouseup="onMouseUp"
              @cellmousedown="onMouseDown"
              @cellmouseenter="onMouseEnter"
            />
          </div>
  </div> 
</template>

<script>
import Cell from './Cell.vue'

export default {
  name: 'category',
  components:{
    Cell
  },

  // props: {
  //   words: { type: Array, default: () => [] },
  //   blanks: { type: Array, default: () => [] },
  //   letters: { type: Object, default: () => ({}) },
  //   gridWidth: { type: Number, default: () => 1 },
  //   gridHeight: { type: Number, default: () => 1 },
  //   filledWords: { type: Array, default: () => [] },
  //   focusedCell: { type: String, default: () => '0:0' },
  //   hoveredWord: { type: String, default: () => '0:0:0:0' },
  //   editGridMode: { type: Boolean, default: () => false },
  //   twoLetterWords: { type: Array, default: () => [] },
  //   impossibleWords: { type: Array, default: () => [] },
  //   threeLetterWords: { type: Array, default: () => [] },
  //   suggestionCounts: { type: Array, default: () => [] },
  // },

  computed: {
    
  },

  methods: {
    
  },
}
</script>
