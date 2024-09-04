import React, { useState } from "react";

const ImportSchedule = () => {
  const [importedData, setImportedData] = useState(null);

  // Обработчик изменения файла
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          // Преобразуем содержимое файла в объект
          const json = JSON.parse(e.target.result);
          // Сохраняем данные в localStorage
          localStorage.setItem("week", JSON.stringify(json));
          setImportedData(json);
          alert("Schedule successfully imported!");
        } catch (error) {
          alert("Failed to import schedule: Invalid JSON format");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
      {importedData && (
        <div>
          <h3>Imported Schedule Preview:</h3>
          <pre>{JSON.stringify(importedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImportSchedule;
