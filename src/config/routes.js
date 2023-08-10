const routes = {
    '/': {
        components: [
           {
                name: 'block-header',
                path: 'components/Header.vue'
            },
            {
                name: 'block-footer',
                path: 'components/Footer.vue'
            },
            {
                name: 'block-alert',
                path: 'components/Alert.vue'
            }
        ],
        template: 'views/Home.vue'
    },
    '/dashboard': {
        components: [
            {
                name: 'block-header',
                path: 'components/Header.vue'
            },
            {
                name: 'block-footer',
                path: 'components/Footer.vue'
            },
            {
                name: 'block-alert',
                path: 'components/Alert.vue'
            }
        ],
        template: 'views/Dashboard.vue'
    }
}

function currentView (path) {
    var _currentPath = path || window.location.hash || '';
    var view = routes[_currentPath.slice(1) || '/'];
    return view;
}

function currentTemplate(path) {
    return currentView(path).template;
}

function componentsView (path) {
    return currentView(path).components;
}

module.exports.routes = routes;

module.exports.currentView = currentView;

module.exports.currentTemplate = currentTemplate;

module.exports.componentsView = componentsView;