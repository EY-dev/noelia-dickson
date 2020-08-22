import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: (/Mobi|Android/i.test(navigator.userAgent)),
    isLoaded: false,
    isEnglish: false,
    englishDictionary: {
      menu: {
        home : 'home',
        about : 'about',
        illustrations : 'illustrations',
        experience: 'experience',
        contact : 'contact'
      },
      bottomMenu : {
        animation : 'animations',
        pictures: 'images',
        books: 'scriptwriting',
        copyright: ['made with', 'by', 'for a better web']
      },
      home:{
        subheader:'Graphic designer, Illustrator and 2d Animator',
        buttons: {
          button1: 'Pictures',
          button2: 'Experience',
        }
      },
      contact : {
        description : 'I am willing to relocate, or to work online',
        contactInformation: [
          {header : 'Phone', value : '+1 (787) 377-0707'},
          {header : 'Email', value : 'noedixon@gmail.com'},
          {header : 'Location', value : 'Puerto Rico'}
        ],
      },

      about: {
        description: 'Born and raised in San Juan, Puerto Rico. Interested in visual arts, animation, and film culture from early life. Possesses BFA in the field of Graphic Design from the School of Fine Arts and Desing of Puerto Rico, and an MFA degree in Communication & Research from the University of Puerto Rico. Vast experience as a creative writer, visual artist, and illustrator.',
        skills:{
          header: 'Skills',
          value : [
              {value : 'Graphic Design', badge: 90},
            {value: 'Illustration', badge: 95},
            {value: '2D Animation', badge: 80},
            {value: 'Creative writing', badge: 85},
            {value: 'Research', badge: 95},
            {value: 'Video editing', badge: 75},
            {value: 'Spanish', badge: 100},
            {value: 'Storyboarding', badge: 80},
            {value: 'Scriptwriting', badge: 85}]
        }
      }
    },
    spanishDictionary: {
      menu: {
        home : 'home',
        about : 'sobre',
        illustrations : 'la ilustración',
        experience: 'la experiencia',
        contact : 'contacto'
      },
      bottomMenu : {
        animation : 'animación',
        pictures: 'images',
        books: 'escritura',
        copyright: ['made with', 'by', 'for a better web']
      },
      home:{
        subheader:'Diseñador gráfico, ilustrador y animador 2d',
        buttons: {
          button1: 'la ilustración',
          button2: 'la experiencia',
        }
      },
      contact : {
        description : 'I am willing to relocate, or to work online',
        contactInformation: [
          {header : 'Phone', value : '+1 (787) 377-0707'},
          {header : 'Email', value : 'noedixon@gmail.com'},
          {header : 'Location', value : 'Puerto Rico'}
        ],
      },
      about: {
        description: 'Nacida y criada en la ciudad de San Juan de Puerto Rico. Mis interés en las artes visuales, la animación y la cultura cinematografica han estado presentes desde temprana edad. He adquirido un grado de bachillerato en de la Escuela de Artes Plásticas y Diseño de Puerto Rico, y un grado de maestría en comunicaciones de la Universidad de Puerto Rico, recinto de Río Piedras. Cuento con vasta experiencia en el campo de la escritura creativa, las artes visuales y la ilustración.',
        skills:{
          header: 'Habilidades',
          value : [
            {value : 'Diseño gráfico', badge: 90},
            {value: 'Ilustracion', badge: 95},
            {value: 'Animación 2D', badge: 80},
            {value: 'Escritura creativa', badge: 85},
            {value: 'Investigación', badge: 95},
            {value: 'Edición de video', badge: 75},
            {value: 'Inglés', badge: 100},
            {value: 'Storyboarding', badge: 80},
            {value: 'Escritura de guión', badge: 85}
          ]
        }
      }
    },
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
