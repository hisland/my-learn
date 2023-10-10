<script setup lang="tsx">
import { Form } from '@arco-design/web-vue'
import { FormItem } from '@arco-design/web-vue'
import { Input } from '@arco-design/web-vue'
import { Button } from '@arco-design/web-vue'

import { ref, reactive } from 'vue'
const formRef = ref(null)
const obj = reactive({
  aa: '1',
  bb: '2',
})
function reset() {
  formRef.value?.resetFields()
}
</script>
<template>
  <div class="compa">
    <Form :model="obj" ref="formRef">
      <FormItem
        field="aa"
        label="aa"
        :rules="[
          {
            minLength: 5,
            message: 'halo',
          },
        ]"
        validate-trigger="input"
      >
        <Input v-model="obj.aa"></Input>
      </FormItem>
      <FormItem field="bb">
        <Input v-model="obj.bb"></Input>
      </FormItem>
      <FormItem field="bb">
        <Button>submit</Button>
        <Button @click="reset">reset</Button>
      </FormItem>
    </Form>
    <div>values: {{ obj }}</div>
  </div>
</template>
<style scoped>
.foo {
  color: purple;
}
</style>
