<script setup>
const people =
    {
      src:'https://images.generated.photos/zRuly38LuHo-upVQfxZjUb6YXOHXapy58gXXFglv1Rg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAzMzE4LmpwZw.jpg',
        title: 'Jane Doe',
        alt: 'Jane Doe',
    }

</script>

<template>
  <section>
    <h1 style="text-align:center;margin:40px 0px;font-size:40px">Data Example</h1>
    <section class="content">
        <section class="person"><img v-bind="people">
            <div>
                <h1>{{ people.title }}</h1>
            </div>
        </section>
    </section>
  </section>
</template>

<style scoped>

</style>
