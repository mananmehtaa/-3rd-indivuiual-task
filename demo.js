db.createCollection("patients");

db.patients.insertOne({
  "name": "John Doe",
  "age": 45,
  "gender": "Male",
  "healthData": [
    {
      "date": new Date("2023-04-11T00:00:00Z"),
      "heartRate": 75,
      "ECGReport": {
        "reportId": "123456",
        "results": "Normal sinus rhythm with no significant ST-T wave changes.",
        "attachments": [
          {
            "name": "ECG_20230411.png",
            "size": 1024,
            "contentType": "image/png",
            "data": new BinData(0, "iVBORw0KGgoAAAANSUhEUgAAADIA...")
          }
        ]
      }
    },
    {
      "date": new Date("2023-04-10T00:00:00Z"),
      "heartRate": 72,
      "ECGReport": {
        "reportId": "654321",
        "results": "Sinus tachycardia with non-specific ST-T wave changes.",
        "attachments": [
          {
            "name": "ECG_20230410.png",
            "size": 2048,
            "contentType": "image/png",
            "data": new BinData(0, "iVBORw0KGgoAAAANSUhEUgAAADIA...")
          }
        ]
      }
    }
  ]
});
