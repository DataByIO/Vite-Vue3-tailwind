import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
/*************************************************************
 /* SYSTEM NAME      : scripts
 /* PROGRAM NAME     : store.js
 /* DESCRIPTION      : Vuex는 Vue.js에서 사용하는 상태 관리 라이브러리, 모든 데이터 통신을 한 곳에서 중앙 집중식으로 관리하는 패턴
 https://ccambo.github.io/Dev/Vue/5.what-is-the-store-in-vuex/

 npm install vuex-persistedstate
 /* MODIFIVATION LOG :
 /* DATA         AUTHOR          DESC.
 /*--------     ---------    ----------------------
 /*2025.03.21   KIMDONGMIN   INTIAL RELEASE
 /*2025.03.21   KIMDONGMIN   Vue Vuex(store) Add
 /*************************************************************/

// Create a new store instance.
const store = createStore({
    state: {
        id: null,
        username: null,
        role: null
    },
    mutations: {
        setId(state, id) {
            state.id = id;
        },
        setUsername(state, username) {
            state.username = username;
        },
        setRole(state, role) {
            state.role = role;
        },
    },
    plugins: [
        createPersistedState({
            // 저장소를 로컬 스토리지로 설정
            storage: window.localStorage,
        }),
    ],
});
export default store;
