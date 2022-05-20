<template>
  <div class="prose prose-headings:underline">
    <h1>Contact</h1>
    <p>I'd love to chat.</p>
    <div class="form__container">
      <form
        v-if="feedback == ''"
        class="form"
        method="post"
        name="ask-question"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="."
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="ask-question">

        <div class="form__field">
          <label class="form__label" for="Name">Name</label>
          <input
            id="Name"
            v-model="form.name"
            class="form__input"
            type="text"
            placeholder="Your Name"
            name="Name"
          >
        </div>
        <div class="form__field">
          <label class="form__label" for="Email">Email</label>
          <input
            id="Email"
            v-model="form.email"
            class="form__input"
            type="email"
            placeholder="your_email@email.com"
            name="Email"
          >
        </div>
        <div class="form__field">
          <label class="form__label" for="Message">Your Message</label>
          <textarea
            id="Message"
            v-model="form.message"
            class="form__textarea"
            name="message"
          />
        </div>
        <div class="form__field">
          <!-- <div data-netlify-recaptcha></div> -->
          <p class="sr-only">
            <label>Don't fill this out if you're human: <input name="bot-field"></label>
          </p>
        </div>
        <div class="form__field">
          <!-- <VueHcaptcha sitekey="057fdad7-0752-4c40-9c71-eb4631e3428d" @verify="handleHumans" /> -->
        </div>
        <div class="form__field">
          <button v-if="human" class="form__submit-button" value="Send">
            Submit
          </button>
        </div>
      </form>
      <div v-else>
        {{ feedback }}
      </div>
    </div>
  </div>
</template>

<script>
// import VueHcaptcha from '@hcaptcha/vue-hcaptcha';
export default {
  name: 'ContactPage',
  // components: { VueHcaptcha },
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      feedback: '',
      human: false
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleHumans () {
      return (
        this.human = true
      )
    },
    handleSubmit () {
      if (this.human === true) {
        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: this.encode({
            'form-name': 'ask-question',
            ...this.form
          })
        })
          .then(() => {
            this.feedback = 'Form submitted. 🎉 '
          })
          .catch(() => {
            this.feedback = 'Sorry, there was an error. 😭'
          })
      } else {
        this.feedback = 'Please provide proof of humanity. 🤖'
      }
    }
  }
}
</script>
