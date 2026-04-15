// 🔥 구글 마법 칠판(Firebase) 연결 설정
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, update, push, child, onValue } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// ⭐ 사진 창고(Storage) 도구 추가! (이게 없으면 사진 버튼이 기절합니다)
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
const storage = getStorage(app); // ⭐ 창고 연결

// ⭐ 다른 파일에서 쓸 수 있게 내보내기 (storage 관련 도구들 추가됨!)
export { db, ref, set, get, update, push, child, onValue, storage, sRef, uploadBytes, getDownloadURL };
