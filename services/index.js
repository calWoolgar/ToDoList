import taskService from './taskService';

export default ({ $axios }, inject) => {
    const allMethods = {
        ...taskService($axios)
    };

    const methods = Object.keys(allMethods)
    methods.forEach((method) => {
        inject(method, allMethods[method])
    })
}