const ScheduleModule = {
  init() {
    this.initSaveAll();
    this.initTimeInputs();
  },

  initSaveAll() {
    const saveAllForm = document.getElementById("save-all-form");
    if (!saveAllForm) return;

    saveAllForm.addEventListener("submit", () => {
      for (let day = 1; day <= 7; day++) {
        const dayForm = document
          .querySelector(`form input[name="dayOfWeek"][value="${day}"]`)
          ?.closest("form");

        if (!dayForm) continue;

        const isActiveCheckbox = dayForm.querySelector(
          'input[name="isActive"]',
        );
        const startTimeInput = dayForm.querySelector('input[name="startTime"]');
        const endTimeInput = dayForm.querySelector('input[name="endTime"]');

        const hiddenIsActive = saveAllForm.querySelector(
          `input[name="day${day}_isActive"]`,
        );
        const hiddenStartTime = saveAllForm.querySelector(
          `input[name="day${day}_startTime"]`,
        );
        const hiddenEndTime = saveAllForm.querySelector(
          `input[name="day${day}_endTime"]`,
        );

        if (hiddenIsActive && isActiveCheckbox) {
          hiddenIsActive.value = isActiveCheckbox.checked;
        }
        if (hiddenStartTime && startTimeInput) {
          hiddenStartTime.value = startTimeInput.value || "";
        }
        if (hiddenEndTime && endTimeInput) {
          hiddenEndTime.value = endTimeInput.value || "";
        }
      }
    });
  },

  initTimeInputs() {
    const timeInputs = document.querySelectorAll(
      '.schedule-time-input[type="time"]',
    );

    timeInputs.forEach((input) => {
      input.type = "text";
      input.placeholder = "JJ:MM";
      input.maxLength = 5;

      input.addEventListener("input", (e) => this.handleTimeInput(e));
      input.addEventListener("blur", (e) => this.handleTimeBlur(e));
    });
  },

  handleTimeInput(event) {
    const input = event.target;
    input.value = this.formatTime(input.value);
  },

  handleTimeBlur(event) {
    const input = event.target;
    if (input.value.length === 5 && !this.isValidTime(input.value)) {
      input.value = "08:00";
    }
  },

  formatTime(value) {
    value = value.replace(/[^\d:]/g, "");

    if (value.length === 2 && !value.includes(":")) {
      value += ":";
    }

    return value.substring(0, 5);
  },

  isValidTime(value) {
    return /^([0-1]?\d|2[0-3]):([0-5]?\d)$/.test(value);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  ScheduleModule.init();
});
