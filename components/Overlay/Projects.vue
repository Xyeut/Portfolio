<template>
    <div class="project__overlay">
        <div class="project__content">
            <div class="overlay__info">
                <div class="overlay__header">
                    <div class="header__content">
                        <h1 class="overlay--header --highlight">{{ project.name }}</h1>
                        <h2 class="overlay--date">{{ project.date }}</h2>
                    </div>

                    <button class="project__close svg__button" @click="$emit('closeProject', project)">
                        <Icon name="material-symbols:close"></Icon>
                    </button>

                </div>


                <div class="overlay__icons">
                    <Icon :name="icon" v-for="icon in project.skills" :key="icon" class="overlay--icon"></Icon>
                </div>

                <p class="overlay__description">{{ project.description }}</p>

                <div class="overlay__buttons">
                    <button :class="`overlay__button button--click ${!project.view ? 'button--hide' : ''}`"
                        @click="openExternalLink(project.view)">
                        <Icon name="ion:open-outline" />
                        View
                    </button>
                    <button @click="openExternalLink(project.code)"
                        :class="`overlay__button button--click ${!project.code ? 'button--hide' : ''}`">
                        <Icon name="mdi:github" /> Code
                    </button>
                </div>
            </div>

            <img :src="`/assets/${project.image}.png`" :alt="project.alt" class="overlay__image">
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    project: Project,
}>()


function openExternalLink(link: string | undefined) {
    console.log(link)
    if (!link) return;

    window.open(link, "_blank")

}

</script>


<style lang="scss" >
.project__overlay {
    z-index: 3;

    display: flex;
    align-items: center;

    width: 100%;
    min-height: 100dvh;

    left: 50%;
    position: fixed;
    // overflow-y: auto;
    transform: translate(-50%);

    background: $primary-color-overlay;
}

.project__content {
    gap: 70px;
    padding: 85px clamp(30px, 5vw, 135px);

    display: flex;
    justify-content: center;
    align-items: center;

    overflow-y: auto;
    pointer-events: all;

    width: 100%;
    max-height: calc(100dvh - 100px);

    background: $primary-color;

}

.overlay__info {
    width: 40%;

    gap: 15px;
    display: flex;
    flex-direction: column;
}

.overlay__header {
    display: flex;
    justify-content: space-between;
}

.header__content {
    gap: 30px;
    display: flex;
    align-items: center;
}

.project__close {
    pointer-events: all;
}

.overlay--header {
    position: relative;

    font-size: clamp(rem(25), 4vw, rem(40));
}

.overlay--header::after {
    content: "";
    position: absolute;

    width: 3px;
    height: 25px;

    top: 50%;
    right: -15px;
    transform: translateY(-50%);

    background-color: $text-secondary;
}

.overlay--date {
    font-size: rem(18);
    font-weight: 600;

    color: $text-secondary;
}


.overlay__icons {
    gap: 25px;
    display: flex;
    align-items: center;
}

.overlay--icon {
    height: 35px;
    width: clamp(28px, 3vw, 40px);

    color: $secondary-color;
    fill: $secondary-color !important;

    path {
        fill: $secondary-color !important
    }
}


.overlay__description {
    font-size: clamp(rem(17), 3vw, rem(20));
}


.overlay__buttons {
    gap: 50px;
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between
}

.overlay__button {
    width: 100%;

    justify-content: center;

    border-radius: 12px;
    background: transparent;
    border: 1px solid $secondary-color;

    cursor: pointer;
    pointer-events: all;

    font-size: rem(20) !important;
    color: $secondary-color;
}

.button--hide {
    color: $text-secondary;
    border-color: $text-secondary;
    pointer-events: none;
}


.overlay__image {
    width: 500px;
    height: 350px;
    object-fit: cover;

    border-radius: 22px;
}



@media screen and (max-width: 1240px) {

    .overlay__image {
        width: 100%
    }

    .overlay__info {
        width: 100%;
    }

    .project__content {
        flex-direction: column;
        justify-content: flex-start
    }
}


@media screen and (max-width: 520px) {
    .overlay--header::after {
        display: none;
    }

    .overlay--date {
        display: none;
    }



    .overlay__buttons {
        gap: 30px;
        flex-direction: column;
    }


    .overlay__image {
        width: 100%;
        height: 250px;
    }
}
</style>