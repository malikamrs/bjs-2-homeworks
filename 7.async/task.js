class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {
      if (!time || typeof callback !== "function") {
        throw new Error("Отсутствуют обязательные аргументы");
      }
      if (this.alarmCollection.some(alarm => alarm.time === time)) {
        console.warn("Уже присутствует звонок на это же время");
      }
      this.alarmCollection.push({ time, callback, canCall: true });
    }
  
    removeClock(time) {
      const before = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
      return before !== this.alarmCollection.length; 
    }
  
    getCurrentFormattedTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`; 
    }
  
    start() {
      if (this.intervalId !== null) return; 
  
      this.intervalId = setInterval(() => {
        const current = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
          if (alarm.canCall && alarm.time === current) {
            alarm.canCall = false;  
            try {
              alarm.callback();
            } catch (e) {
              console.error("Ошибка в callback будильника:", e);
            }
          }
        });
      }, 1000);
    }
  
    stop() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach(alarm => (alarm.canCall = true));
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }

