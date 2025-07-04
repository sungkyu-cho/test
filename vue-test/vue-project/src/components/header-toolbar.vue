<template>
  <header class="header-component">
    <DxToolbar class="header-toolbar">
      <!-- ... -->
      <DxItem location="after">
        <template #default>
          <DxButton icon="search" @click="searchFunc" />
        </template>
      </DxItem>
      <!-- ... --->
    </DxToolbar>
  </header>
</template>

<script setup lang="ts">
import { DxToolbar, DxItem } from 'devextreme-vue/toolbar'

defineProps<{
  searchFunc?: (query: string) => void
}>()
</script>
