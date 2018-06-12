import * as types from '../constants/actionTypes'

export const addUser = text => ({ type: types.ADD_USER, text })
export const setAuth = status => ({ type: types.SET_AUTH, status })