<script>
    export default {
        name: 'ContactForm',

    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            },
            isSubmitting: false,
            submitStatus: null
        }
    },
    methods: {
        async submitForm() {
            this.isSubmitting = true;
            this.submitStatus = null;

            try {
                //get post from server.js
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formData)
                });

                const data = await response.json();

                //error catch
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to submit form');
                }

                //popup for success
                this.submitStatus = {
                    type: 'success',
                    message: 'Thank you for your message! We will get back to you soon.'
                };

                //reset form after submission
                this.formData = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                };
            } catch (error) {
                console.error('Form submission error:', error);
                this.submitStatus = {
                    type: 'error',
                    message: error.message || 'An error occurred. Please try again.'
                };
            } finally {
                this.isSubmitting = false;
            }
        }
    }

}
</script>

<template>
    <div class="contact-form">
        <div v-if="submitStatus" :class="['status-message', submitStatus.type]">
            {{ submitStatus.message }}
        </div>
        <form @submit.prevent="submitForm">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="formData.firstName" placeholder="First name..." required>

            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="formData.lastName" placeholder="Last name..." required>

            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" placeholder="firstlast@email.com" required>

            <label for="phone">Phone Number (Optional)</label>
            <input type="tel" id="phone" v-model="formData.phone" placeholder="1234567891" pattern="[0-9]{3}[0-9]{3}[0-9]{4}">

            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" placeholder="Your message..." style="height:150px" required></textarea>

            <button type="submit">
                {{ isSubmitting ? 'Sending...' : 'Submit' }}
            </button>
        </form>
    </div>
</template>

<style scoped>

    .status-message {
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 4px;
        text-align: center;
    }

    .success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }

    .error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }

    .contact-form {
        width: 50%;
        margin-top: 20px;
        border-radius: 5px;
        padding: 20px;
        margin: auto;
    }

    button {
        background-color: #05754a;
        color: white;
        border: none;
        margin: auto;
        display: block;
        border-radius: 4px;
        cursor: pointer;
        padding: 16px 20px;
        width: 200px;
    }

        button:hover {
            background-color: #45a049;
        }

        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }

    input[type=text], input[type=email], input[type=tel], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    
</style>