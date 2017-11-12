import axios from 'axios'

import router from '../router'

export const state = {
  isLoggedIn: !!window.localStorage.getItem('token'),
  token: window.localStorage.getItem('token') || undefined,
  errors: []
}

export const getters = {
  isLoggedIn: state => state.isLoggedIn,
  errors: state => state.errors
}

const TYPES = {
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL'
}

export const mutations = {
  [TYPES.REGISTER_SUCCESS]: (state, token) => {
    state.token = token
    state.isLoggedIn = true
  },
  [TYPES.REGISTER_FAIL]: (state, errors) => {
    state.errors = errors
  },
  [TYPES.LOGIN_SUCCESS]: (state, token) => {
    state.token = token
    state.isLoggedIn = true
  },
  [TYPES.LOGIN_FAIL]: (state, errors) => {
    state.errors = errors
  },
  logout: (state) => {
    state.token = undefined
    state.isLoggedIn = false
    window.localStorage.removeItem('token')
  }

}

export const actions = {
  register ({ commit }, user) {
    axios
      .post('https://doesangueapi.herokuapp.com/v1/auth/register', user)
      .then(response => {
        commit(TYPES.REGISTER_SUCCESS, response.data.access_token)
        window.localStorage.setItem(
          'token',
          JSON.stringify(response.data.access_token)
        )
        router.push('/campaigns')
      })
      .catch(error => {
        if (error.response && error.response.data) {
          commit(TYPES.REGISTER_FAIL, error.response.data)
        } else if (error.request) {
          commit(TYPES.REGISTER_FAIL, error.request)
        } else {
          commit(TYPES.REGISTER_FAIL, error.message)
        }
      })
  },
  login ({ commit }, user) {
    axios.post('https://doesangueapi.herokuapp.com/v1/auth/login', user)
      .then(response => {
        commit(TYPES.LOGIN_SUCCESS, response.data.access_token)
        window.localStorage.setItem(
          'token',
          JSON.stringify(response.data.access_token)
        )
        router.push('/campaigns')
      })
      .catch(error => {
        if (error.response && error.response.data.error) {
          commit(TYPES.LOGIN_FAIL, [{ error: error.response.data.error }])
        } else if (error.response && error.response.data) {
          commit(TYPES.LOGIN_FAIL, error.response.data)
        } else if (error.request) {
          commit(TYPES.LOGIN_FAIL, error.request)
        } else {
          commit(TYPES.LOGIN_FAIL, error.message)
        }
      })
  }
}
