const request = indexedDB.open('MyDB', 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore('arrays');
};

request.onsuccess = (event) => {
  const db = event.target.result;
  const tx = db.transaction('arrays', 'readwrite');
  tx.objectStore('arrays').put(arr, 'myArray');
};