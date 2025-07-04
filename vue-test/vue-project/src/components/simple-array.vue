<template>
  <DxDataGrid :data-source="customers" key-expr="ID" :show-borders="true">
    <DxColumn v-for="column in columns" v-bind:key="column" :data-field="column" />
  </DxDataGrid>
</template>
<script setup lang="ts">
import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid'
import { customers } from '@/assets/array-data.ts'

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax']
</script>
