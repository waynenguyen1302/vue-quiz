<template>
    <div class="about">
        <h1>
            About Our App
        </h1>
        <div class="content">
            <p>
                Our application is a quiz game made to aid users in learning and assessing their familiarity with the Vue.js framework. Our app, developed as a group project for a college assignment, exemplifies the versatility and power of Vue.js in building interesting and interactive user interfaces.                
            </p>
            <p>
                Our app offers users a fun and difficult approach to expand their grasp of this well-known framework with a range of questions covering all elements of Vue.js. Our app contains something for everyone, whether you're new to Vue.js or an experienced developer looking to refresh your knowledge.
            </p>
            <p>
                Don't wait! Try it out right away to get started on the path to Vue.js mastery!
            </p>
        </div>
    </div>
</template>

<style>
.about {
    width: 100%;
    height: calc(100vh - 160px);
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

p {
    margin-bottom: 20px;
    font-size: 18px;
    color: black;
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}


</style>


<script>
export default {
  name: 'AboutView'
}
</script>