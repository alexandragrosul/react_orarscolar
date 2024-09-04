import React from "react";

const ExportSchedule = () => {
  // Функция для экспорта расписания
  const exportSchedule = () => {
    // Извлекаем данные из localStorage
    const weekSchedule = localStorage.getItem("week");

    if (!weekSchedule) {
      alert("No schedule found in localStorage");
      return;
    }

    // Преобразуем строку JSON в объект
    const schedule = JSON.parse(weekSchedule);

    // Преобразуем объект в строку JSON для экспорта
    const dataStr = JSON.stringify(schedule, null, 2); // null, 2 используется для форматирования JSON

    // Создаем Blob из строки JSON
    const blob = new Blob([dataStr], { type: "application/json" });

    // Создаем ссылку на файл
    const url = URL.createObjectURL(blob);

    // Создаем временный элемент <a> для скачивания файла
    const a = document.createElement("a");
    a.href = url;
    a.download = "week_schedule.json";
    a.click();

    // Освобождаем память, удаляя временную ссылку
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={exportSchedule}>Export Schedule</button>
    </div>
  );
};

export default ExportSchedule;
