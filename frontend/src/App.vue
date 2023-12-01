<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const router = useRouter();

const onLogout = () => {
  auth.logout()

  router.push('/login')
}

router.beforeEach((to, from, next) => {
  if (to.path === '/restricted' && !auth.username) {
    window.alert('Please log in to access Restricted page');
    next(false); // Prevent navigation
  } else {
    next();
  }
});
</script>

<template>
  <div class="container">

    <header>
        <div class="navbar">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/restricted">Restricted</RouterLink>
        </div>
        <div class="auth">
          <p class="username" v-if="auth.username">{{ auth.username }}</p>
          <div v-if="auth.username">
            <button class="login-nav" @click="onLogout()">Logout</button>
          </div>
          <div v-else>
            <RouterLink class="login-nav" to="/login">Login</RouterLink>
          </div>
        </div>
    </header>
  </div>


  <RouterView></RouterView>
</template>

<style>

.container {
  width: 100%;
  height: 100vh;
  background-image: url(./assets/preview.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  filter: brightness(90%);
  z-index: -99;
  overflow: hidden;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 20px;
  margin: 20px 50px;
}

a {
  color: white;
}

.login-nav {
  border: 1px solid white ;
  border-radius: 3px;
  padding: 1px 5px 3px 5px;
}

.username {
  color: white;
  font-size: 16px;
}

.auth {
  position: absolute;
  top: 30px;
  right: 70px;
  display: flex;
  gap: 20px;
}


div#app {
  height: 100vh;
  width: 100%;
  padding: 0;
}
</style>