<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import CardBox from "@/components/CardBox.vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import { useMainStore } from "@/stores/main";

const router = useRouter();
const mainStore = useMainStore();

const username = ref("");
const password = ref("");
const error = ref(null);

const login = async () => {
  try {
    const successfulLogin = await mainStore.login(
      username.value,
      password.value
    );
    if (successfulLogin) {
      mainStore.setUser({ name: username.value }); // Establecer el nombre en la tienda
      // Redireccionar a la página después de un inicio de sesión exitoso
    } else {
      error.value = "Credenciales inválidas"; // Manejar error de inicio de sesión
    }
  } catch (err) {
    console.error("Error en el inicio de sesión:", err);
    error.value = "Error en el inicio de sesión";
  }
};

const submit = async () => {
  try {
    const success = await mainStore.login(username.value, password.value);

    if (success) {
      mainStore.setUser({ name: username.value }); // Establecer el nombre en la tienda
      router.push("/dashboard"); // Redireccionar a la página después de un inicio de sesión exitoso
    } else {
      error.value = "Credenciales inválidas"; // Manejar error de inicio de sesión
    }
  } catch (error) {
    console.error("Error en el inicio de sesión:", err);
    error.value = "Error en el inicio de sesión";
  }
};
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Login" help="Please enter your login">
          <FormControl
            v-model="username"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormCheckRadio name="remember" label="Remember" :input-value="true" />

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/dashboard" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
