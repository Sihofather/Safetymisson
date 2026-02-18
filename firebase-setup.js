// 🔥 구글 마법 칠판(Firebase) 연결 설정
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, update, push, child, onValue } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8LeUcSM4h9YVt-1jwnX_lXFhBWmUHCEg",
    authDomain: "safety-mission-109f5.firebaseapp.com",
    databaseURL: "https://safety-mission-109f5-default-rtdb.firebaseio.com",
    projectId: "safety-mission-109f5",
    storageBucket: "safety-mission-109f5.firebasestorage.app",
    messagingSenderId: "238088236502",
    appId: "1:238088236502:web:ed189b4deb164548e4c877"
};

// 마법 칠판 시작!
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 다른 파일에서 쓸 수 있게 내보내기
export { db, ref, set, get, update, push, child, onValue };