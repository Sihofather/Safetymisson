// 🔥 구글 마법 칠판(Firebase) 연결 설정
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, update, push, child, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// ⭐ 출입증(인증) 발급 도구 추가! (이게 없으면 데이터가 안 보입니다)
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8LeUcSM4h9YVt-1jwnX_lXFhBWmUHCEg",
    authDomain: "safety-mission-109f5.firebaseapp.com",
    databaseURL: "https://safety-mission-109f5-default-rtdb.firebaseio.com",
    projectId: "safety-mission-109f5",
    storageBucket: "safety-mission-109f5.firebasestorage.app",
    messagingSenderId: "238088236502",
    appId: "1:238088236502:web:ed189b4deb164548e4c877"
};

// 마법 칠판 및 도구들 시작!
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app); // ⭐ 인증 도구 연결

// ⭐ 웹사이트가 켜지면 자동으로 '익명 출입증' 발급받기
// top-level await: 인증이 끝날 때까지 모듈 export 를 지연시켜
// 다른 파일에서 db 를 쓸 때 이미 인증이 완료된 상태가 되도록 보장
try {
    await signInAnonymously(auth);
    console.log("✅ 익명 출입증 발급 완료! 데이터베이스에 접근합니다.");
} catch (error) {
    console.error("❌ 출입증 발급 실패:", error);
    alert("⚠️ 인증 실패: 데이터에 접근할 수 없습니다. 페이지를 새로고침하거나 관리자에게 문의하세요.\n\n오류: " + (error && error.message ? error.message : error));
}

// 다른 파일에서 쓸 수 있게 내보내기
export { db, ref, set, get, update, push, child, onValue, storage, sRef, uploadBytes, getDownloadURL };