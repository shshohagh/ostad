<script setup>
const people = [
    {
        image:'https://images.generated.photos/zRuly38LuHo-upVQfxZjUb6YXOHXapy58gXXFglv1Rg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAzMzE4LmpwZw.jpg',
        name: 'Jane Doe',
        designation: 'CEO, Doe Corporation',
        location: '968 Ocala Street, Orlando, Florida'
    },
    {
        image:'https://images.generated.photos/dVrq4AXS8SmlQ_HTyxG4bJRmi4IulUA4omUbvvSyQMU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkwODEzLmpwZw.jpg',
        name: 'John Doe',
        designation: 'CTO, Doe Corporation',
        location: '2970 Duke Lane, Brunswick, New Jersey'
    },
    {
        image:'https://images.generated.photos/XkTVulI9UnbMVl1veOfrra6bS2v0QIqLbSIQrgXni14/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYxODM1LmpwZw.jpg',
        name: 'Jimmy Doe',
        designation: 'CMO, Doe Corporation',
        location: '3679 Elk Street, Denver, Colorado'
    }
]
</script>

<template>
  <section>
    <h1 style="text-align:center;margin:40px 0px;font-size:40px">Data Example</h1>
    <section class="content">
        <section class="person"><img :src="people[0].image" alt="Jane Doe">
            <div>
                <h1>{{ people[0].name }}</h1>
                <h2>{{ people[0].designation }}</h2>
                <p> {{ people[0].location }}</p>
            </div>
        </section>
        <section class="person"><img :src="people[1].image" alt="Jane Doe">
            <div>
                <h1>{{ people[1].name }}</h1>
                <h2>{{ people[1].designation }}</h2>
                <p> {{ people[1].location }}</p>
            </div>
        </section>
        <section class="person"><img :src="people[2].image" alt="Jane Doe">
            <div>
                <h1>{{ people[2].name }}</h1>
                <h2>{{ people[2].designation }}</h2>
                <p> {{ people[2].location }}</p>
            </div>
        </section>
    </section>
  </section>
</template>

<style scoped>

</style>
