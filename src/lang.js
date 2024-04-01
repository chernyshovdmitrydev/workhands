import { reactive, computed } from "vue";

export const appLang = reactive({
  selectedLang: "ru",
  changeLang(lang) {
    this.selectedLang = lang;
  },
});

const langObj = {
  ru: {
    months: [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ],
    weeks: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  },
  en: {
    months: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    weeks: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  },
};

export const $l = computed(() => {
	return langObj[appLang.selectedLang]
})
