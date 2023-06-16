<template>
    <section class="xyeut">
        <div class="xyeut__header">
            <h1 class="header--main">Hey! I'm <span class="--highlight">Xyeut</span></h1>
            <h2 class="header--subheading">Software <span class="--highlight">Engineer</span></h2>
        </div>

        <p class="xyeut__paragraph">Innovative Web Designer and Developer <span class="--highlight">revolutionizing</span>
            online experiences<span class="xyeut--pg--expanded">. With expertise in cutting-edge technologies, seamless user
                interfaces, and
                captivating visual designs.</span></p>

        <button class="button--click" @click="goToContact">
            <Icon name="material-symbols:android-contacts" /> Contact Me
        </button>
    </section>
</template>


<style lang="scss" scoped>
.xyeut {
    gap: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}


.header--main {
    font-size: clamp(rem(40), 4vw, rem(76))
}

.header--subheading {
    font-size: clamp(rem(20), 3vw, rem(50))
}

.xyeut__paragraph {
    font-size: clamp(rem(18), 2vw, rem(27))
}

.xyeut__paragraph .--highlight {
    font-family: $secondary-font;
    font-weight: 400;
}


.button--click {
    font-size: clamp(rem(20), 3vw, rem(26))
}



@media screen and (min-width: 760px) {
    .xyeut__paragraph {
        width: 70%;
    }
}

@media screen and (max-width: 1000px) and (min-width: 760px) {
    .xyeut__paragraph {
        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .xyeut {
        gap: 35px;
        align-items: center;
    }

    .xyeut__paragraph,
    .header--main,
    .header--subheading {
        text-align: center;
    }

}


@media screen and (max-width: 520px) {
    .xyeut--pg--expanded {
        display: none;
    }
}
</style>


