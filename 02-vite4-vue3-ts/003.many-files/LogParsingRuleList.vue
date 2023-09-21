<script setup lang="tsx">
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { onMounted, nextTick } from 'vue'
import { Message } from '@arco-design/web-vue'
import apiAxiosSys from '@/apiAxiosSys.ts'
import BtnModal from '@/components/common/BtnModal.vue'
import RemoteDropdowSelect from '@/components/business/RemoteDropdowSelect.vue'
import ElanSearchForm from '@/components/business/ElanSearchForm/ElanSearchForm.vue'

// import FunctionalComp1 from './FunctionalComp1.js'
// import FunctionalComp2 from './FunctionalComp2.jsx'
// import FunctionalComp3 from './FunctionalComp3.tsx'
// import DefineSetupComp1 from './DefineSetupComp1.js'
import DefineSetupComp2 from './DefineSetupComp2.jsx'
import DefineSetupComp3 from './DefineSetupComp3.tsx'
import Vue3SetupTsx from './Vue3SetupTsx.vue'
import Vue3SetupTsxVNodeInTemplate from './Vue3SetupTsxVNodeInTemplate.vue'
import Vue3Tsx from './Vue3Tsx.vue'

import Bb from './bb.vue'
function tryJsx() {
  Message.info({
    content: () => {
      return <span>1223003</span>
    },
  })
}
async function tryGet() {
  try {
    const xhr1 = await apiAxiosSys.post('/v1/dlf/user/menu/userRoleMenuList')
    console.log('xhr1.data: ', xhr1.data)
    const xhr2 = await apiAxiosSys.get('/v1/dlf/user/getCurrentUser')
    console.log('xhr2.data: ', xhr2.data)
  } catch (error) {
    console.log('error: ', error)
  }
}

const formItems = reactive([
  {
    type: 'input',
    formItemAttrs: {
      field: 'name',
    },
    formInputAttrs: {
      placeholder: '123',
    },
  },
  {
    type: 'localSelect',
    formItemAttrs: {
      field: 'type',
    },
    formInputAttrs: {
      placeholder: '123',
    },
  },
])

function DoClick(evt) {
  console.log('evt 1: ', evt)
}
</script>
<template>
  <div>src/pages/sensor/rule/LogParsingRule/list.vue</div>
  <div>
    <button @click="tryJsx">tryJsx</button>
    <button @click="tryGet">tryGet</button>

    <!-- <BtnModal title="title" btnText="按钮11">
      <template v-slot:footer="slotProps"> god {{ slotProps }} </template>
    </BtnModal> -->

    <!-- <ElanSearchForm :formItems="formItems"></ElanSearchForm> -->

    <!-- <TestTsx aa="1" bb="31" @click="DoClick" @click.stop="DoClick"></TestTsx>
    <TestJsx aa="1" bb="31" @click="DoClick" @click.stop="DoClick"></TestJsx> -->
    <!-- <TestJsSetup aa="1" bb="31" @click="DoClick" @click.stop="DoClick"></TestJsSetup> -->
    <!-- <TestTsSetup aa="1" bb="31222" @click="DoClick" @click.stop="DoClick"></TestTsSetup> -->
    <!-- <TestTsxSetup1 aa="1" bb="31222" @click="DoClick" @click.stop="DoClick"></TestTsxSetup1> -->
    <!-- <TestTsxSetup2 aa="1" bb="31222" @click="DoClick" @click.stop="DoClick"></TestTsxSetup2>
    <FunctionalComp2 aa="1" bb="31222" @click="DoClick" @click.stop="DoClick">halo</FunctionalComp2> -->

    <!-- <DefineSetupComp1 aa="1" bb="31222" @click="DoClick" @click.stop="DoClick">halo</DefineSetupComp1> -->
    <!-- <DefineSetupComp2 aa="1" bb="31222" @click="DoClick" @click.stop="DoClick">halo</DefineSetupComp2> -->
    <!-- <DefineSetupComp3 aa="1" bb="31222" @click="DoClick" @click.stop="DoClick">halo</DefineSetupComp3> -->

    <Vue3SetupTsx aa="1" bb="31222" @click="DoClick" @click.stop="DoClick">halo</Vue3SetupTsx>
    <Vue3SetupTsxVNodeInTemplate aa="1" bb="31222" @click="DoClick" @click.stop="DoClick"
      >halo</Vue3SetupTsxVNodeInTemplate
    >
    <Vue3Tsx aa="1" bb="31222" @click="DoClick" @click.stop="DoClick">halo</Vue3Tsx>

    <!-- <Bb cc="2" @click="DoClick"></Bb> -->

    <!-- <RemoteDropdowSelect url="abc" bb="1" @kk="tryGet"></RemoteDropdowSelect> -->
  </div>
</template>
<style scoped lang="less">
.foo {
}
</style>
