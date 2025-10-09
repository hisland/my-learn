<script setup lang="ts">
import { onMounted, ref } from 'vue'
import allAttCkList from './allAttCkList.json'
import bgHead from './img/bgHead.svg'
import bgDefault from './img/bgDefault.svg'
import bgHighlight from './img/bgHighlight.svg'
import bgBlank from './img/bgBlank.svg'

const iconPathMap = import.meta.glob('./img/图标/*.svg', { eager: true })
// console.log('iconPathMap: ', iconPathMap)

const props = withDefaults(
  defineProps<{
    showLegend: boolean
    highlightIdList: string[]
  }>(),
  {
    highlightIdList: () => []
  }
)

const cols = allAttCkList.length
// console.log('cols: ', cols)
const rows = Math.max(...allAttCkList.map((item) => item.technology.length))
// console.log('rows: ', rows)

const boxWidth1 = 108
const boxHeightLegend = 30
const boxHeightHead = 24
const boxHeightRow = 38
const boxGap = 4

const viewBoxWidth = cols * boxWidth1 + (cols - 1) * boxGap
// console.log('viewBoxWidth: ', viewBoxWidth)
const viewBoxHeight =
  boxHeightLegend + boxHeightHead + boxGap + rows * boxHeightRow + (rows - 1) * boxGap
// console.log('viewBoxHeight: ', viewBoxHeight)

function getTranslateHead(index1: number) {
  const xx = boxWidth1 / 2 + boxWidth1 * index1 + boxGap * index1
  return `translate(${xx}, ${boxHeightLegend + boxHeightHead / 2})`
}
function getTranslateRow(index1: number, index2: number) {
  const xx = boxWidth1 / 2 + boxWidth1 * index1 + boxGap * index1
  const yy =
    boxHeightLegend +
    boxHeightHead +
    boxGap +
    boxHeightRow * index2 +
    boxGap * index2 +
    boxHeightRow / 2
  return `translate(${xx}, ${yy})`
}

onMounted(() => {})
</script>
<template>
  <svg width="100%" height="100%" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`">
    <foreignObject :x="0" :y="0" :width="500" :height="20">
      <div style="display: flex; align-items: center; justify-content: flex-start">
        <svg style="width: 24px; height: 12px">
          <image width="100%" height="100%" :href="bgDefault"></image>
        </svg>
        <div style="margin-left: 4px; font-size: 14px; color: white">技战术</div>
        <svg style="width: 24px; height: 12px; margin-left: 20px">
          <image width="100%" height="100%" :href="bgHighlight"></image>
        </svg>
        <div style="margin-left: 4px; font-size: 14px; color: white">队伍使用过的技战术</div>
      </div>
    </foreignObject>
    <template v-for="(item1, index1) in allAttCkList" :key="`col-${index1}`">
      <g :transform="getTranslateHead(index1)">
        <image
          :href="bgHead"
          :x="`-${boxWidth1 / 2}`"
          :y="`-${boxHeightHead / 2}`"
          :width="boxWidth1"
          :height="boxHeightHead"
          preserveAspectRatio="none"
        ></image>
        <foreignObject
          :x="`-${boxWidth1 / 2}`"
          :y="`-${boxHeightHead / 2}`"
          :width="boxWidth1"
          :height="boxHeightHead"
        >
          <div
            style="
              height: 100%;
              box-sizing: border-box;
              text-align: center;
              font-size: 12px;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <svg width="14" height="14">
              <image
                :href="iconPathMap[`./img/图标/${item1.attCkName}.svg`].default"
                width="14"
                height="14"
              ></image>
            </svg>
            <div style="margin-left: 4px">{{ item1.attCkName }}</div>
          </div>
        </foreignObject>
      </g>
      <template v-for="(row2, index2) in rows" :key="`row-${index2}`">
        <g :transform="getTranslateRow(index1, index2)">
          <image
            v-if="!item1.technology[index2]"
            :href="bgBlank"
            :x="`-${boxWidth1 / 2}`"
            :y="`-${boxHeightRow / 2}`"
            :width="boxWidth1"
            :height="boxHeightRow"
            preserveAspectRatio="none"
          ></image>
          <image
            v-else-if="props.highlightIdList.includes(item1.technology[index2]?.attCkId)"
            :href="bgHighlight"
            :x="`-${boxWidth1 / 2}`"
            :y="`-${boxHeightRow / 2}`"
            :width="boxWidth1"
            :height="boxHeightRow"
            preserveAspectRatio="none"
          ></image>
          <image
            v-else
            :href="bgDefault"
            :x="`-${boxWidth1 / 2}`"
            :y="`-${boxHeightRow / 2}`"
            :width="boxWidth1"
            :height="boxHeightRow"
            preserveAspectRatio="none"
          ></image>
          <foreignObject
            :x="`-${boxWidth1 / 2}`"
            :y="`-${boxHeightRow / 2}`"
            :width="boxWidth1"
            :height="boxHeightRow"
          >
            <div
              style="
                height: 100%;
                box-sizing: border-box;
                text-align: center;
                font-size: 12px;
                color: white;
                word-wrap: break-word;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 3px;
              "
            >
              {{ item1.technology[index2]?.attCkName }}
            </div>
          </foreignObject>
        </g>
      </template>
    </template>
  </svg>
</template>
<style scoped lang="less"></style>
