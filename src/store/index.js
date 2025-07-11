import { createStore } from 'vuex'

export default createStore({
  state: {
    forms: [],
  },
  getters: {
    getForm: (state) => (formName) => {
      return state.forms.find((item) => item.formN === formName)
    },
  },
  mutations: {
    adds(state, form, key = 'formN') {
      const index = state.forms.findIndex((item) => item[key] === form[key])
      if (index !== -1) {
        state.forms[index] = form
      } else {
        state.forms.push(form)
      }
    },
    del_form(state, Name) {
      state.forms = state.forms.filter((item) => item.formN !== Name)
    },
  },
})
