<template>
    <section class="knowledge">
        <div class="knowledge__header">
            <h1 class="header--main">My <span class="--highlight">Knowledge</span></h1>
            <h2 class="header--subheading">Languages & <span class="--highlight">Skills</span></h2>
        </div>

        <p class="knowledge__paragraph">Displays my <span class="--highlight">extensive</span> coding skills and knowledges
            I use<span class="knowledge--pg--expanded">. Allows me to create responsive & dynamic web applications for
                clients</span></p>

        <button class="button--click" @click="$emit('show-skills')">
            <Icon name="material-symbols:code-blocks" /> View Skills
        </button>
    </section>
</template>


<style lang="scss" scoped>
.knowledge {
    gap: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}



.knowledge__paragraph {
    font-size: clamp(rem(18), 2vw, rem(27));
}

.knowledge__paragraph .--highlight {
    font-family: $secondary-font;
    font-weight: 400;
}

.button--click {
    font-size: clamp(rem(20), 3vw, rem(26))
}



@media screen and (min-width: 760px) {
    .knowledge__paragraph {
        width: 70%;
    }
}

@media screen and (max-width: 1000px) and (min-width: 760px) {
    .knowledge__paragraph {
        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .knowledge {
        gap: 35px;
        align-items: center;
    }

    .knowledge__paragraph,
    .header--main,
    .header--subheading {
        text-align: center;
    }

}


@media screen and (max-width: 520px) {
    .knowledge--pg--expanded {
        display: none;
    }
}
</style>