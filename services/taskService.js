export default ($axios) => ({
    getTasks: async() => {
        let response = await $axios.get(`/api/tasks`);
        return response.data;
    }
});