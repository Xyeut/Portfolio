<template>
    <section class="projects">
        <div class="project__info">
            <div class="info__header">
                <h1 class="header--main">My <span class="--highlight">Projects</span></h1>
                <h2 class="header--subheading">My Development <span class="--highlight">Process</span></h2>
            </div>

            <p class="info__paragraph"> Full-stack portfolio showcasing projects demonstrating <span
                    class="--highlight">significant
                    contributions</span><span class="projects--pg--expanded"> to
                    diverse technological solutions. </span></p>

        </div>


        <div class="project__list">
            <div class="project" v-for="project, index in projects" :key="project.name">
                <img :src="`/assets/${project.image}.png`" class="project__img" :alt="project.alt">

                <div class="project__header">
                    <h2 class="project--name --highlight">{{ project.name }}</h2>
                    <h2 class="project--id">{{ index + 1 }}</h2>
                </div>

                <button class="project__view button--click" @click="$emit('show-project', project)">View</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const projects = ref([{
    name: 'RoFriender',
    date: '06/26/2022',
    skills: ["akar-icons:typescript-fill", "nonicons:vue-16", "vscode-icons:file-type-scss", "mdi:web", "skill-icons:figma-dark"],
    alt: "RoFriender",
    description: "Months of planning and design went into creating the Chrome extension RoFriender. There are currently over 6,000 users using this , and that number is rising!", image: 'RoFriender',
    view: 'https://chrome.google.com/webstore/detail/rofriender/mfpeoppoodjigpoamnajfpkodfpbodpa?hl=en&authuser=0',
    code: '',
}, {
    name: "Denblox",
    date: "04/11/2021",
    skills: ["cib:deno", "akar-icons:typescript-fill", "mdi:web"],
    alt: "Denblox",
    description: "Denblox is an API wrapper for the Roblox API that was developed in the Deno JavaScript runtime environment and is widely used by developers.",
    image: 'Denblox',
    view: "https://deno.land/x/denblox@v1.0.4",
    code: 'https://github.com/tru9/denblox'
}, {
    name: "RoDevs",
    date: "07/19/2022",
    skills: ["akar-icons:vue-fill", "vscode-icons:file-type-scss", "skill-icons:figma-dark"],
    alt: "RoDevs",
    description: 'With 60,000 members, RoDevs is a Roblox community. I was offered the chance to build a website for this neighborhood. I did eventually discover that the owner of this community had made changes to the website and changed my code. But do note, I only created and coded the home page!',
    image: 'RoDevs',
    view: 'https://rodevs.com/',
    code: ''
}, {
    name: "RblxTrade",
    date: "06/03/2022",
    skills: ["akar-icons:typescript-fill", "ic:baseline-discord", "mdi:web", "uil:docker", "mdi:google-spreadsheet", "simple-icons:mongodb"],
    alt: "RblxTrade",
    description: "One of the biggest Roblox trading communities, RblxTrade has over 110k users on its Discord server. I was chosen to develop software that gathers various products and statistics to display on their website.",
    image: 'RblxTrade',
    view: 'https://rblx.trade/',
    code: ''
}
])

</script>


<style lang="scss">
.projects {
    gap: 60px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
}


.project__info {
    width: 90%;
    padding-top: 250px;

    gap: 35px;
    display: flex;
    flex-direction: column;
}


.info__paragraph {
    font-size: clamp(rem(18), 3vw, rem(27))
}


.info__paragraph .--highlight {
    font-family: $secondary-font;
    font-weight: 400;
}


.project__list {
    width: 100%;

    gap: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.project {
    display: flex;
    align-self: center;

    gap: 30px;
    flex-direction: column;
}

.project__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.project--name,
.project--id,
.project--name>span {
    font-size: clamp(rem(18), 4vw, rem(23));
    font-weight: 600;
}


.project__img {
    height: 200px;
    width: auto;
    object-fit: cover;

    border-radius: 8px;
}

.project__view {
    padding: 10px 0px;

    justify-content: center;

    color: $text-secondary;
    font-size: rem(18);

    border: 1px solid $text-secondary;
    background: $primary-color;
    border-radius: 12px;

    transition: color .3s ease-in-out, border .3s ease-in-out;
}


.project__view:hover {
    color: $secondary-color;
    border-color: $secondary-color;
}


@media screen and (max-width: 768px) {
    .project__info {
        width: auto;
        text-align: center;
    }

    .projects--pg--expanded {
        display: none;
    }
}
</style>