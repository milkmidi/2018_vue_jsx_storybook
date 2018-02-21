<script>
const PermissionComponent = {
  // tempalte 不能只有 slot tag, 一定要有 div 包
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
  <section>
    <PermissionComponent :permissionCode="0">
      <h2>PermissionCode 0</h2>
    </PermissionComponent>
    <PermissionComponent :permissionCode="1">
      <h2>PermissionCode 1</h2>
    </PermissionComponent>
  </section>
</template>
