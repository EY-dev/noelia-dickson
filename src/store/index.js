import Vue from 'vue'
import Vuex from 'vuex'

import en from '../../public/language/en.json'
import es from '../../public/language/es.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: (/Mobi|Android/i.test(navigator.userAgent)),
    isLoaded: false,
    isEnglish: false,
    englishDictionary: en.dictionary,
    spanishDictionary: es.dictionary,
    dictionary: null,
  },
  mutations: {
    SET_LOADED: (state, value) => {
      state.isLoaded = value;
    },
    SET_PORTRAIT: (state, value) => {
      state.isPortrait = value;
    },
    SET_MOBILE: (state, value) => {
      state.isMobile = value;
    },
    SET_ENGLISH: (state, value) => {
      state.isEnglish = value;
      state.dictionary = state.isEnglish ? state.englishDictionary : state.spanishDictionary;
      localStorage.setItem("historyLanguage", state.isEnglish ? 'english' : 'spanish');
    }
  },
  actions: {
    setLoaded: (state, value) => {
      state.commit('SET_LOADED', value);
    },
    setPortrait: (state, value) => {
      state.commit('SET_PORTRAIT', value);
    },
    setMobile: (state, value) => {
      state.commit('SET_MOBILE', value);
    },
    setEnglish: (state, value) => {
      state.commit('SET_ENGLISH', value);
    },
    setLanguage: (state) => {
      let historyLanguage  = localStorage.getItem("historyLanguage");
      if (historyLanguage !=='spanish'){
        state.commit('SET_ENGLISH', true);
      }
      else{
        state.commit('SET_ENGLISH', false);
      }
    },
  },
  modules: {
  },
  getters:{
    isMobile: state => {
      return state.isMobile;
    },
    isLoaded: state => {
      return state.isLoaded;
    },
    isEnglish: state => {
      return state.isEnglish;
    },
    getDictionary: state => {
      return state.dictionary;
    }
  }
})
