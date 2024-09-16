<template>
  <section>
    <aside>
      <div style="padding: 12px 0">
        <router-link
          v-for="component in components"
          :key="component.compName"
          :to="`/i-ui/${component.compClassName}`"
          replace
          >{{ component.compZhName }}
        </router-link>
      </div>
    </aside>
    <main>
      <router-view style="padding: 20px" #default="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </section>
</template>

<script setup>
import components from 'packages/components.json'
</script>

<style lang="less" scoped>
section {
  display: flex;
  width: 100%;
  height: 100%;

aside {
  flex: 1;
  height: 100%;
  overflow: auto;

  a {
    position: relative;
    display: block;
    padding: 8px 20px;
    font-weight: bold;

    + a::before {
      position: absolute;
      top: 0;
      right: 0;
      left: 20px;
      height: 1px;
      content: "";
      background: var(--borderColor-muted);
      transform: scaleY(0.5);
      transform-origin: 0 0;
    }

    &.router-link-active {
      color: #42b983;
    }
  }
}

main {
  flex: 5;
  height: 100%;
  overflow: auto;
}
}
</style>
