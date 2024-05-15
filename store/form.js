import {defineStore} from "pinia";
import axios from "~/plugins/axios";
import {useToast} from "vue-toastification";

const $axios = axios().provide.axios;

export const useFormStore = defineStore('form', {
    state: () => {
        return {
            emailToken: false,
            avatarUrl: "",
            uploadUrl: 'http://202.133.88.224:8002/storage/',
            singleContributorData: {},
            firstName: '',
            lastName: '',
        }
    },
    actions: {
        async sendEmailVerifictation(email) {

            const toast = useToast()

            this.emailToken = true;

            $axios.post('/send-email-token', {
                email: email
            }).then(res => {
                this.emailToken = false;
                toast.success("Email sent successfully");
            }).catch(err => {
                console.log(err.response.data.message);
                if (err.response.data.message === "The email has already been taken."){
                    toast.error("The email has already been taken!")
                }else {
                    toast.error("Invalid email address!")
                }
                this.emailToken = false;
            })
        },
        async verifyEmailToken(token, email, first, last, category, exp, country, avatar) {

            const toast = useToast();
            console.log(country);

            const router = useRouter()

            $axios.post('/verify-email', {
                email: email,
                token: token
            }).then(res => {
                $axios.post('/contributor', {
                    first_name: first,
                    last_name: last,
                    category: category,
                    experience_years: exp,
                    country: country,
                    email: email,
                    invited_by: token,
                    avatar: avatar,
                },{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {

                    this.avatarUrl = res.data.avatar;
                    router.push(`/contributor/${res.data.id}`);

                }).catch(err => {
                    if (err.response.data.message === "The email has already been taken."){
                        toast.error("The email has already been taken!");
                    }else {
                        toast.error("Invalid token!");
                    }
                    console.log(err.response.data.message);

                })


            }).catch(err => {
                console.log(err);
                toast.error("Invalid token!");
            })

        },
        async getContributorData(id) {
          $axios.get(`contributor/${id}`).then(res => {
              console.log(res.data);
              this.singleContributorData = res.data;
          }).catch(err => {
              console.log(err);
          })
        }
    }
})