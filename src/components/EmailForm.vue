<template>
    <div class="form-box">
        <div class="email-form">
            <h2>Send message</h2>
            <v-form @submit.prevent="sendIt" ref="emailForm" class="hide" id="form">
                <v-text-field dark
                              v-model="form.fName"
                              :counter="10"
                              :rules="nameRules"
                              label="First name"
                              required
                ></v-text-field>
                <v-text-field dark
                              v-model="form.lName"
                              :counter="10"
                              :rules="nameRules"
                              label="Last name"
                              required
                ></v-text-field>
                <v-text-field dark
                              v-model="form.email"
                              :rules="emailRules"
                              label="E-mail"
                              required
                ></v-text-field>
                <v-textarea dark
                            :rules="messageRules"
                            v-model="form.message"
                            label="Message"
                            required
                ></v-textarea>
                <v-btn class="ma-2" tile outlined color="#C83737" @click="sendIt">
                    <v-icon left>forward</v-icon>
                    Send
                </v-btn>
            </v-form>
            <v-dialog v-model="dialog" width="50vh">
                <v-card>
                    <v-card-text>
                        <div class="text-center" style="padding-top: 25px">
                            <p>
                                Your Message was sent
                            </p>
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                        >
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <form v-show='false' id="email-form" @submit.prevent="sendEmail">
                <input type="text" name="user_fName" :value="form.fName">
                <input type="text" name="user_lName" :value="form.lName">
                <input type="email" name="user_email" :value="form.email">
                <textarea name="user_message" :value="form.message"></textarea>
                <input id="sending" type="submit" value="Send">
            </form>
        </div>
        <div class="tail">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg3289"
                version="1.1"
                viewBox="0 0 375 120"
                width="100%">
                <g
                    transform="translate(-76.729164,-157.42708)"
                    id="layer1">
                    <path
                        id="rect3270"
                        fill="#2f1e28"
                        d="m 121.72917,157.42709 h 50 v 120 l -16.81543,-30 -8.18451,-15.0001 -8.33336,15.00007 -16.6667,30.00003 z"/>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
    name: "EmailForm",
    components: {},
    data: () => ({
        form: {
            fName: '',
            lName: '',
            email: '',
            message: ''
        },
        dialog: false,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        messageRules: [
            v => !!v || 'message is required'
        ]
    }),

    methods: {
        sendIt() {
            const el = document.getElementById('sending');
            el.click();
        },
        sendEmail(e) {
            if (this.$refs.emailForm.validate()) {
                emailjs.sendForm('gmail', 'template_Q0NfAADj', e.target, 'user_ZLOIg359OFBPpKHA5oBQw')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                        this.clearForm();
                        this.resetValidation();
                        this.dialog = true;
                    })
                    .catch((error) => {
                        console.log('FAILED...', error);
                    });
            }
        },
        clearForm() {
            this.$refs.emailForm.reset()
            this.form = {
                fName: '',
                lName: '',
                email: '',
                message: ''
            }
        },
        resetValidation() {
            this.$refs.emailForm.resetValidation()
        },
    },
    mounted() {
        const el = document.getElementById('form');
        setTimeout(() => {
            el.classList.remove('hide');
        }, 3000);
        const tail = document.querySelector('.tail');
        const form = document.querySelector('.form-box');
        tail.addEventListener('click', () => {
            form.classList.toggle('move-out');
        })
    }
}
</script>

<style scoped>
.form-box{
    transition: all 2s ease-in-out;
}
.email-form {
    width: 100%;
    margin-top: -25px;
    background-color: rgba(47, 30, 40, 1);
    padding: 25px;
    transition: all 3s ease-in-out;
}
.email-form h2{
    font-family: 'Alata', sans-serif;
    font-size: 1.2rem;
    color: #e3e3e3;
}
.hide {
    opacity: 0;
}
.tail{
    width: 100%;
    height: 40px;

}
.tail svg{
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);

}
.tail:hover g path:hover{
    fill: #C83737;
    cursor: pointer;
}
.move-out{
    transform: translate(0, -600px);
}
@media only screen and (max-width: 660px) {
    .tail{
        transform: scale(-1, 1);
    }
    .email-form {
        margin-top: 20px;
        width: 100%;

    }
    .email-form h2{
        font-size: 1rem;
    }
    .move-out{
        transform: translate(0, -750px);
    }
}


</style>
