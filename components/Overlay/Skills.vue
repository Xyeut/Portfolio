<template>
    <div class="skills__overlay">
        <div class="skills">
            <div class="skills__header">
                <h1 class="header--main">
                    <span class="--highlight">Tech</span>
                    Stack
                </h1>

                <button class="skill__close svg__button" @click="$emit('closeSkills')">
                    <Icon name="material-symbols:close"></Icon>
                </button>
            </div>

            <div class="tech-stack">
                <div class="tech-stack__skill">
                    <Icon name="simple-icons:typescript" class="skill--icon" />
                    <span class="skill--label">TypeScript</span>
                </div>
                <div class="tech-stack__skill">
                    <svg xmlns="http://www.w3.org/2000/svg" class="skill--icon vue--icon" viewBox="0 0 256 221">
                        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" />
                        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" />
                        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" />
                    </svg>
                    <span class="skill--label">Vue</span>
                </div>
                <div class="tech-stack__skill">
                    <Icon name="akar-icons:python-fill" class="skill--icon" />
                    <span class="skill--label">Python</span>
                </div>
                <div class="tech-stack__skill">
                    <svg xmlns="http://www.w3.org/2000/svg" class="skill--icon" viewBox="0 0 32 32">
                        <path fill="#cd6799"
                            d="M16.171 18.7c-.481.221-1.008.509-2.063 1.088c-.4.225-.818.45-1.207.662c-.027-.027-.055-.061-.082-.089c-2.087-2.23-5.947-3.805-5.783-6.8c.061-1.091.436-3.955 7.413-7.433c5.742-2.83 10.311-2.046 11.1-.307c1.134 2.479-2.449 7.092-8.379 7.761a4.469 4.469 0 0 1-3.751-.948c-.314-.341-.361-.361-.477-.293c-.191.1-.068.409 0 .586a3.5 3.5 0 0 0 2.141 1.684a11.4 11.4 0 0 0 6.956-.689c3.594-1.391 6.4-5.258 5.578-8.5c-.825-3.287-6.281-4.371-11.443-2.537a26 26 0 0 0-8.79 5.047c-2.844 2.66-3.294 4.972-3.11 5.94c.662 3.437 5.4 5.674 7.3 7.331c-.1.055-.184.1-.259.143c-.948.471-4.562 2.36-5.463 4.358c-1.023 2.264.164 3.887.948 4.105a5.832 5.832 0 0 0 6.281-2.544a6.3 6.3 0 0 0 .559-5.8a5.03 5.03 0 0 1 .716-.477c.484-.286.945-.568 1.354-.786a10.475 10.475 0 0 1 4.475-.989c3.246.382 3.887 2.407 3.764 3.26a2.157 2.157 0 0 1-1.03 1.459c-.225.143-.3.191-.28.293c.027.15.136.143.327.116a2.535 2.535 0 0 0 1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753 7.753 0 0 0-2.946.587q-.225.093-.437.2Zm-4.825 7.839c-1.078 1.173-2.578 1.616-3.226 1.241c-.7-.4-.423-2.135.9-3.376a17.18 17.18 0 0 1 2.53-1.889c.157-.1.389-.232.668-.4l.075-.041l.164-.1a4.658 4.658 0 0 1-1.111 4.565Z" />
                    </svg>
                    <span class="skill--label">SCSS</span>
                </div>
                <div class="tech-stack__skill">
                    <Icon name="devicon:express" class="skill--icon"></Icon>
                    <span class="skill--label">Express</span>
                </div>
                <div class="tech-stack__skill">
                    <Icon name="cib:ubuntu" class="skill--icon"></Icon>
                    <span class="skill--label">Ubuntu</span>
                </div>
                <div class="tech-stack__skill">
                    <Icon name="akar-icons:node-fill" class="skill--icon"></Icon>
                    <span class="skill--label">Node</span>
                </div>
                <div class="tech-stack__skill">
                    <Icon name="simple-icons:lua" class="skill--icon"></Icon>
                    <span class="skill--label">Lua</span>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.skills__overlay {
    z-index: 3;

    display: flex;
    align-items: center;

    width: 100%;
    min-height: 100dvh;

    left: 50%;
    position: fixed;
    overflow-y: auto;
    transform: translate(-50%);

    background: $primary-color-overlay;
}

.skills {
    width: 100%;
    max-height: calc(100dvh - 100px);
    padding: 85px clamp(30px, 5vw, 135px);

    gap: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    overflow-y: auto;
    pointer-events: all;

    background-color: $primary-color;
}

.skills__header {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
}

.skill__close {
    top: 0;
    right: 0;
    position: absolute;

    pointer-events: all;

    width: 50px;
    height: 50px;

    svg {
        width: 40px;
        height: 40px;

        color: $secondary-color;
    }
}

.header--main {
    font-size: clamp(rem(28), 5vw, rem(56))
}

.tech-stack {
    gap: clamp(65px, 10vw, 115px);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.tech-stack__skill {
    gap: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.skill--label {
    font-family: $primary-font;
    font-size: clamp(rem(17), 2vw, rem(19));
}

// DISABLE CLICK
.skill--icon {
    width: clamp(45px, 5vw, 50px);
    height: clamp(45px, 5vw, 50px);

    fill: $secondary-color !important;
    color: $secondary-color;

    path {
        fill: $secondary-color
    }
}


.vue--icon path:nth-child(3) {
    fill: $secondary-svg;
}

@media screen and (max-width: 1200px) {
    .skills {
        justify-content: flex-start;

    }
}


@media screen and (max-width: 520px) {

    .skill--label {
        display: none;
    }
}
</style>