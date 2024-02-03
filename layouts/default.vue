<template>
    <div>
        <header class="title">
            <NuxtLink class="logo" to="/">Coffee Order</NuxtLink>
        </header>
        <Nuxt />
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* Header Style */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: #2F3B52;
}
</style>