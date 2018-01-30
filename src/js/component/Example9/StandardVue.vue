<script>
const PermissionComponent = {
  // tempalte 也不能只有 slot, 一定要有 div 包
  template: `
    <div class="child">
      <slot></slot>
    </div>
  `,
};

export default {
  components: {
    PermissionComponent,
  },
};
</script>

<template>
  <div class="example">
    <PermissionComponent :permissionCode="0">
      <h2>PermissionCode 0</h2>
    </PermissionComponent>
    <PermissionComponent :permissionCode="1">
      <h2>PermissionCode 1</h2>
    </PermissionComponent>
  </div>
</template>
