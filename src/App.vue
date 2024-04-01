<script>
import CustomCalendar from "./components/CustomCalendar.vue";
import { appLang } from "./lang.js";
export default {
  components: {
    CustomCalendar,
  },
  data() {
    return {
      selectedLanguage: appLang.selectedLang,
    };
  },
  methods: {
    handleChangeLang() {
      appLang.changeLang(this.selectedLanguage);
    },
  },
};
</script>

<template>
  <CustomCalendar initialDate="2024-1-11" />
  <select v-model="selectedLanguage" @change="handleChangeLang">
    <option value="ru">русский</option>
    <option value="en">english</option>
  </select>
</template>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gainsboro;
}
</style>
