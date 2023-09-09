import { Calendar } from "@fullcalendar/core";
import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";


const calendarEl = document.getElementById("calendar");
const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin],
    // ナビゲーション
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    // 日本語化
    locales: jaLocale,
    locale: 'ja',

    // 日付表示の境界線時刻を設定(デフォルトは9時)
    nextDayThreshold: '00:00:00',

    events: '/calendar/action',
});

calendar.render();
