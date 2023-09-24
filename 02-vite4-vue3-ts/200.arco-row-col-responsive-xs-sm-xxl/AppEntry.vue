<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { Row, Col } from '@arco-design/web-vue'
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <h3>固定8</h3>
    <Row :gutter="8">
      <Col :span="8" v-for="(vv0, index0) in 8" :key="index0">
        <div class="box"></div>
      </Col>
    </Row>
    <h3>固定6</h3>
    <Row :gutter="8">
      <Col :span="6" v-for="(vv0, index0) in 8" :key="index0">
        <div class="box"></div>
      </Col>
    </Row>
    <h3>:xs="12" :sm="8" :xxl="6"</h3>
    <Row :gutter="8">
      <Col :xs="12" :sm="8" :xxl="6" v-for="(vv0, index0) in 8" :key="index0">
        <div class="box"></div>
      </Col>
    </Row>
  </div>
</template>
<style scoped lang="less">
.box {
  height: 50px;
  background-color: #eee;
  margin-bottom: 8px;
}
</style>
