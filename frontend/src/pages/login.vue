<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const router = useRouter();

const username = ref('');
const password = ref('');

const onLogin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      username: username.value,
      password: password.value,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  // if (!username.value.trim() || !password.value.trim()) {
  //   window.alert('Please enter both username and password');
  // } else {
  //   // Add your password validation logic here
  //   if (isValidLogin(username.value, password.value)) {
  //     auth.login(username.value);
  //     router.push('/');
  //   } else {
  //     // Show error message or handle invalid login
  //     console.error('Invalid username or password');
  //   }
  // }
};

// const isValidLogin = (username, password) => {
//   return username.trim() !== '' && password.trim() !== '';
// };
</script>

<template>
    <div class="login-page">
        <h1>Login Page</h1>
        <div class="login-form">
            <input type="text" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button @click="onLogin">Login</button>
        </div>
    </div>
</template>

<style>
.login-page {
    position: absolute;
    top: 160px;
    left: 80px;
    display: flex;
    flex-direction: column;
    justify-items: left;
    gap: 20px;
    border: none;
}

h1 {
    color: white;
}

.login-form {
    width: fit-content;
    display: flex;
    gap: 5px;

}

input {
    background-color: rgba(255, 255, 255, 0);
    color: white;

    &::placeholder {color: rgb(169, 169, 169);}
}

button {
    background-color: rgba(240, 248, 255, 0);
    border: solid white 1px;
    border-radius: 3px;
    color: white;
}
</style>