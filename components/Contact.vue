<template>
    <section class="contact">
        <div class="contact__heading">
            <h1 class="heading--main">Contact <span class="--highlight">Me</span></h1>
            <h2 class="heading--subheading">Leave a detailed message to <span class="--highlight">get in touch!</span></h2>
            <p class="contact__paragraph">
                <Icon name="ic:baseline-phone" /> 720-230-6989
            </p>

        </div>


        <form action="" class="contact__form">
            <div class="form__container">
                <label for="name" class="contact__label">Full Name</label>
                <input type="text" placeholder="John Doe" name="name" required class="contact__input" ref="name">

            </div>

            <div class="form__container">
                <label for="email" class="contact__label">Email</label>
                <input type="text" placeholder="john.doe!@email.com" name="email" required class="contact__input"
                    ref="email">
            </div>

            <div class="form__container input--message">
                <label for="message" class="contact__label">Message</label>
                <textarea rows="4" cols="50" placeholder="Your Message" name="message" required class="contact__input "
                    ref="body"></textarea>
            </div>
        </form>


        <button class="contact__email button--click" @click="sendEmail">
            <Icon name="tabler:mail-filled" /> Email Me
        </button>
    </section>
</template>

<script lang="ts" setup>

const name = ref(null)
const body = ref(null)

function sendEmail() {
    const nameFormat = name.value ? `${(name.value as HTMLInputElement)?.value}` : ""
    const bodyFormat = body.value ? (body.value as HTMLTextAreaElement).value : ""

    window.location.href = `mailto:contact@xyeut.dev?body=${nameFormat}%0D%0A%0D%0A${bodyFormat}%0D%0A`
}

</script>

<style lang="scss">
.contact {
    gap: 50px;
    width: 80%;
    min-height: 800px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact__heading {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.heading--main {
    font-size: clamp(rem(40), 4vw, rem(65));
    text-align: center;

}

.heading--subheading {
    font-size: clamp(rem(18), 2vw, rem(35));
    text-align: center;
}


.contact__paragraph {
    margin-top: 15px;
    font-size: clamp(rem(18), 2vw, rem(27));
}

.contact__label {
    font-size: clamp(rem(18), 2vw, rem(26));
}

.contact__form {
    width: 100%;

    gap: 45px 50px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
}


.form__container {
    gap: 15px;
    display: flex;
    flex-direction: column;
}

.contact__input {
    width: 100%;
    padding: 15px 20px 15px 20px;

    background: $primary-color;
    outline: 1px solid $textbox-input;

    color: $text-secondary
}

.contact__input::placeholder {
    color: $textbox-input
}

.input--message {
    grid-column: span 2;
}

.contact__input {
    border: none;
    font-size: rem(15);
    border-radius: 4px;
}

.contact__email {
    align-self: flex-end;
}


@media screen and (max-width: 880px) {

    .contact {
        width: 100%;
        align-items: center;
    }

    .contact__heading {
        justify-content: center;
        align-items: center;
    }


    .contact__form {
        gap: 25px;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }


    .form__container {
        align-items: center;
    }

    .contact__input {
        padding: 10px 20px 10px 20px;
    }

    .input--message {
        grid-column: span 1;
    }

    .contact__email {
        align-self: center;
    }


}
</style>