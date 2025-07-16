<template>
    <div class="register">
        <form @submit.prevent="register">
            <div class="register__inputs">
                <input type="text" name="username" id="name" placeholder="Имя" v-model="form.userName">
                <input type="email" name="username" id="name" placeholder="email" v-model="form.email">
                <input type="password" name="username" id="name" placeholder="password" v-model="form.password">
            </div>
            <button>Зарегестрироваться</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'


const router = useRouter()

const form = ref({
    userName: '',
    email: '',
    password: ''
})

const register = async () => {
    try {
        await axios.post('http://localhost:5000/api/register', form.value)
        router.push('/profile')
    } catch (error) {
        console.log('Ошибка при регистрации', error)
    }
}
</script>

<style scoped lang="scss">
.register {
    max-width: 410px;
    margin: 100px auto;
    border: 1px solid rgb(126, 124, 124);
    border-radius: 20px;
    padding: 25px;
    background-color: rgb(246, 246, 246);

    input {
        width: 97%;
        padding: 10px 0px 10px 10px;
        margin-bottom: 10px;
        font-size: 16px;
        text-transform: lowercase;
        display: block;
        border-radius: 5px;
        border: 1px solid rgb(116, 116, 116);
    }

    button {
        background: white;
        color: black;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        padding: 20px;
    }
}
</style>