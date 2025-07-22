import { createStore } from 'vuex'

export default createStore({
  state: {
    forms: [],
  },
  getters: {
    getForm: (state) => (formN) => {
      return state.forms.find((item) => item.formName === formN)
    },
  },
  mutations: {
    adds(state, form, key = 'formName') {
      const index = state.forms.findIndex((item) => item[key] === form[key])
      if (index !== -1) {
        state.forms[index] = form
      } else {
        state.forms.push(form)
      }
    },
    del_form(state, formN) {
      state.forms = state.forms.filter((item) => item.formName !== formN)
    },
  },
})
