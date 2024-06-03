
export default Store ({
  state: {
    studentData: null
  },
  mutations: {
    setStudentId(state, data) {
      state.studentData = data;
    }
  },
  actions: {
    updateStudentId({ commit }, data) {
      commit('setStudentId', data);
    }
  },
  getters: {
    getStudentId: state => state.studentData
  }
});
