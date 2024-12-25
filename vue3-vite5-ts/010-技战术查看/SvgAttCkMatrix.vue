<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RsData from './test.json'
import bgHead from './img/bgHead.svg'
import bgDefault from './img/bgDefault.svg'
import bgHighlight from './img/bgHighlight.svg'
import bgBlank from './img/bgBlank.svg'

const iconPathMap = import.meta.glob('./img/图标/*.svg', { eager: true })
// console.log('iconPathMap: ', iconPathMap)

const cols = RsData.data.length
console.log('cols: ', cols)
const rows = Math.max(...RsData.data.map((item) => item.technology.length))
console.log('rows: ', rows)

const boxWidth1 = 108
const boxHeight1 = 38
const boxHeight2 = 24
const boxGap = 4

const viewBoxWidth = cols * boxWidth1 + (cols - 1) * boxGap
console.log('viewBoxWidth: ', viewBoxWidth)
const viewBoxHeight = rows * boxHeight1 + (rows - 1) * boxGap + boxHeight2 + boxGap
console.log('viewBoxHeight: ', viewBoxHeight)

function getTranslate1(index1: number) {
  const x = boxWidth1 / 2 + boxWidth1 * index1 + boxGap * index1
  return `translate(${x}, ${boxHeight2 / 2})`
}
function getTranslate2(index1: number, index2: number) {
  const x = boxWidth1 / 2 + boxWidth1 * index1 + boxGap * index1
  const y = boxHeight1 / 2 + boxHeight1 * index2 + boxGap * index2 + boxHeight2 + boxGap
  return `translate(${x}, ${y})`
}

const highlightIdList = ref(['T1584', 'T1585', 'T1586', 'T1587', 'T1588', 'T1589', 'T1590'])

onMounted(() => {})
</script>
<template>
  <div>
    <div style="display: flex; align-items: center">
      <svg style="width: 12px; height: 12px">
        <image width="12" height="12" :href="bgDefault"></image>
      </svg>
      <div style="margin-left: 4px; font-size: 12px; color: white">技战术</div>

      <svg style="width: 12px; height: 12px; margin-left: 20px">
        <image width="12" height="12" :href="bgHighlight"></image>
      </svg>
      <div style="margin-left: 4px; font-size: 12px; color: white">队伍使用过的技战术</div>
    </div>
  </div>
  <div style="width: 1564px; height: 402px; background: #1f375b">
    <svg width="100%" height="100%" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`">
      <template v-for="(item1, index1) in RsData.data" :key="`col-${index1}`">
        <g :transform="getTranslate1(index1)">
          <image
            :href="bgHead"
            :x="`-${boxWidth1 / 2}`"
            :y="`-${boxHeight2 / 2}`"
            :width="boxWidth1"
            :height="boxHeight2"
            preserveAspectRatio="none"
          ></image>
          <foreignObject
            :x="`-${boxWidth1 / 2}`"
            :y="`-${boxHeight2 / 2}`"
            :width="boxWidth1"
            :height="boxHeight2"
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
          <g :transform="getTranslate2(index1, index2)">
            <image
              v-if="!item1.technology[index2]"
              :href="bgBlank"
              :x="`-${boxWidth1 / 2}`"
              :y="`-${boxHeight1 / 2}`"
              :width="boxWidth1"
              :height="boxHeight1"
              preserveAspectRatio="none"
            ></image>
            <image
              v-else-if="highlightIdList.includes(item1.technology[index2]?.attCkId)"
              :href="bgHighlight"
              :x="`-${boxWidth1 / 2}`"
              :y="`-${boxHeight1 / 2}`"
              :width="boxWidth1"
              :height="boxHeight1"
              preserveAspectRatio="none"
            ></image>
            <image
              v-else
              :href="bgDefault"
              :x="`-${boxWidth1 / 2}`"
              :y="`-${boxHeight1 / 2}`"
              :width="boxWidth1"
              :height="boxHeight1"
              preserveAspectRatio="none"
            ></image>
            <foreignObject
              :x="`-${boxWidth1 / 2}`"
              :y="`-${boxHeight1 / 2}`"
              :width="boxWidth1"
              :height="boxHeight1"
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
  </div>
</template>
<style scoped lang="less"></style>
