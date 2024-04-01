<script>
import { $l } from "../lang.js";
export default {
  props: {
    initialDate: String,
  },
  data() {
    return {
      current: {
        year: null,
        month: null,
      },
      selected: {
        year: null,
        month: null,
        day: null,
      },
    };
  },
  computed: {
    text() {
      return $l.value;
    },
    daysInMonth() {
      return new Date(this.current.year, this.current.month, 0).getDate();
    },
    firstDayOnMonth() {
      const firstDay = new Date(
        this.current.year,
        this.current.month - 1,
        1
      ).getDay();
      return !firstDay ? 6 : firstDay - 1;
    },
  },
  methods: {
    prevMonth() {
      if (this.current.month === 1) {
        this.current.month = 12;
        this.current.year -= 1;
      } else {
        this.current.month -= 1;
      }
    },
    nextMonth() {
      if (this.current.month === 12) {
        this.current.month = 1;
        this.current.year += 1;
      } else {
        this.current.month += 1;
      }
    },
    isDateSelected(day) {
      return (
        this.selected.year === this.current.year &&
        this.selected.month === this.current.month &&
        this.selected.day === day
      );
    },
    changeSelectedDate(day) {
      this.selected.year = this.current.year;
      this.selected.month = this.current.month;
      this.selected.day = day;
      //возвращаю дату по клику
      return `${this.selected.yaer}-${this.selected.month}-${this.selected.day}`;
    },
  },
  created() {
    const date = this.initialDate
      ? this.initialDate.split("-").map(Number)
      : new Date();
    this.current = {
      year: date[0] || date.getFullYear(),
      month: date[1] || date.getMonth() + 1,
    };
    this.selected = {
      year: date[0] || date.getFullYear(),
      month: date[1] || date.getMonth() + 1,
      day: date[2] || date.getDate(),
    };
  },
};
</script>

<template>
  <div class="calendar__container">
    <div class="calendar__header">
      <button @click="prevMonth">&#9668;</button>
      <div>
        <span>{{ text.months[current.month - 1] }}</span
        >&nbsp;
        <span>{{ current.year }}</span>
      </div>
      <button @click="nextMonth">&#9658;</button>
    </div>
    <div>
      <div class="calendar__grid">
        <span v-for="(week, index) in text.weeks" :key="index">{{ week }}</span>
      </div>
      <div class="calendar__grid">
        <span v-for="blank in firstDayOnMonth" :key="blank"></span>
        <span
          v-for="day in daysInMonth"
          class="calendar__item"
          @click="changeSelectedDate(day)"
          :class="{ active: isDateSelected(day) }"
          :key="day"
          >{{ day }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar__container {
  max-width: 250px;
  max-height: 190px;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 10px;
}

.calendar__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.calendar__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  gap: 3px;
}

.calendar__item {
  cursor: pointer;
}

.active {
  outline: 1px solid blue;
}
</style>
