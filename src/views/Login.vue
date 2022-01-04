<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input type="text" v-model="user.username" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input type="password" v-model="user.password" placeholder="Şifre" class="input mb-3" />
    <button class="default-button" @click="onSubmit">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link class="text-red-900 hover:text-black" :to="{ name: 'RegisterPage' }"> Üye olmak istiyorum! </router-link>
    </span>
  </div>
</template>
<script>
import CryptoJs from "crypto-js";
export default {
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const key = "CemreTheKing";
      const cryptedPass = CryptoJs.HmacSHA1(this.user.password, key).toString();

      this.$appAxios.get(`/users?username=${this.user.username}&password=${cryptedPass}`).then((res) => {
        if (res.data?.length > 0) {
          this.$store.commit("setUser", res?.data[0]);
          this.$router.push({ name: "HomePage" });
        } else {
          alert("Bu kullanıcı bulunamadı...");
        }
      });
    },
  },
};
</script>