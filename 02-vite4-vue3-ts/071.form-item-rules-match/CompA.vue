<script setup lang="tsx">
import { Form } from '@arco-design/web-vue'
import { FormItem } from '@arco-design/web-vue'
import { Input } from '@arco-design/web-vue'
import { Button } from '@arco-design/web-vue'

import { ref, reactive } from 'vue'
const obj = reactive({
  aa: '1',
  bb: '1',
})
const formRef = ref(null)
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
            match: /^[^-]*$/,
            message: '不能有-',
          },
        ]"
        validate-trigger="input"
      >
        <Input v-model="obj.aa"></Input>
      </FormItem>
      <FormItem
        field="bb"
        label="bb"
        :rules="[
          {
            validator: (value, callback) => {
              if (/-/.test(value)) {
                callback('不能有-')
              } else {
                callback()
              }
            },
          },
        ]"
        validate-trigger="input"
      >
        <Input v-model="obj.bb"></Input>
      </FormItem>
      <FormItem>
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
