<template>
    <div class="container">
        <transition name="overlay">
            <div class="transition" v-if="showTransition" aria-hidden="true">
                <img class="transition__img" src="/xyeut.png" alt="Transition Image">
            </div>
        </transition>

        <div class="background--animation" aria-hidden="true"></div>

        <Transition name='overlay'>
            <OverlaySkills v-if="overlayRef.showingSkills" @close-skills="toggleOverlaySkills(overlayRef)"></OverlaySkills>
        </Transition>

        <Transition name='overlay'>
            <OverlayProjects v-if="projectRef.showingProject" :project="projectRef.project as unknown as Project"
                @close-project="(project) => toggleOverlayProject(projectRef, project)"></OverlayProjects>
        </Transition>

        <Xyeut />
        <Knowledge @show-skills="toggleOverlaySkills(overlayRef)" />
        <Projects @show-project="(project) => toggleOverlayProject(projectRef, project)" />
        <Contact />

        <transition name="page">
            <div class="page-indicator" v-if="page.isScrolling">
                <div class="indicator xyeut--indicator page--selected"></div>
                <div class="indicator knowledge--indicator"></div>
                <div class="indicator projects--indicator"></div>
                <div class="indicator contact--indicator"></div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
const showTransition = ref(true)

const page = reactive({
    isScrolling: false,
    currentPageID: 0
})

const overlayRef = reactive({
    showingSkills: false,
})

const projectRef = reactive({
    showingProject: false,
    project: undefined,
})

onBeforeMount(() => scrollHandler(page))

onMounted(() => {
    backgroundAnimations()

    setTimeout(() => {
        showTransition.value = false
    }, Math.floor(Math.random() * (2000 - 900) + 900))
})

</script>


<style lang="scss">
@import "~/assets/scss/background.scss";
@import "~/assets/scss/page.scss";

.container {
    position: relative;
    padding: 0 clamp(20px, 8vw, 200px);
}

.transition {
    z-index: 5;

    left: 0;
    position: fixed;

    width: 100dvw;
    height: 100dvh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: $primary-color;

    .transition__img {
        width: clamp(100px, 15vw, 200px)
    }
}


.background--animation {
    left: 0;
    position: absolute;

    width: 100%;
    height: 100%;

    z-index: 1;
    overflow: hidden;
}
</style>