<template>
    <div class="registration">
        <form action="" @submit="addUser">
            <h1>Регистрация</h1>
            <div class="registration__input">
                <label for="name">Имя</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="registration__input">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="registration__input">
                <label for="password">Пароль</label>
                <input type="password" id="password" v-model="form.password" required />
            </div>
            <button type="submit">Зарегистрироваться</button>
            <p>Уже есть аккаунт? <RouterLink to="/login">Войти</RouterLink>
            </p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { register, getUser } from '../../api/auth.ts'

const form = ref({
    name: '',
    email: '',
    password: ''
})

const users = ref([]);

const getUsers = async () => {
    const res = await getUser();
    users.value = res.data
    console.log(users.value)
}

const addUser = async (event: Event) => {
    event.preventDefault()
    const router = useRouter()

    try {
        const user = users.value.array.forEach(element => {
            element === form.value
        });
        if (user == form.value) {
            const response = await register(form.value)
        } else {
            console.log("пользователь уже существует")
        }
        console.log('Вы зарегистрировались: ', form.value)
    } catch (error) {
        console.error('ошибка при регистрации: ', error)
    }
}

onMounted(getUsers)
</script>