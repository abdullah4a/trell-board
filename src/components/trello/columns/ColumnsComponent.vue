<template>
  <div class="columns" style="padding-left: 3px; border: 1px solid red;">
    <div
      v-for="(column, columnIndex) in columns"
      :key="columnIndex"
      class=" column"
      style="min-width: 260px; width: 260px"
    >
      <div
        class=""
        style="font-weight: 600"
        :style="{
          position: 'sticky',
          top: `${0}px`,
          zIndex: 2,
          backgroundColor: 'var(--q-page-background)',
        }"
      >
        <div class="">
          {{ column.name }}
        </div>
      </div>
      <div class="q-pa-md q-my-md">
        <div
          :id="'col' + column.id"
          :data-column-id="column.group.name"
          style="min-height: 300px; position: relative"
          filter=".no-item-placeholder"
        >
          <!-- <div
              v-if="column.noTaskText && !column.tasks.length && !isDragging"
              class="ignore-elements no-item-placeholder text-italic text-subtitle2 text-shade-4 text-center q-px-md q-py-xl"
            >
              {{ column.noTaskText }}
            </div> -->
          <!-- Tasks -->
          <div class="">
            <div class="">
              <div class="" style="font-weight: 600">
                {{ "Task Add" }}
              </div>
              <p class="">
                {{ "Please pick or Drag task here" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IColumn } from "@/utils/types/columns";
import { ref } from "vue";
import columnsData from "@/utils/data/columnsData.json";

const columns = ref<Array<IColumn>>([...columnsData]);
</script>

<style lang="scss" scoped>
.columns{
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}
.column{
    width: 80%;
    overflow-y: auto;
}
</style>
