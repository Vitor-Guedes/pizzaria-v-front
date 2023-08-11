import { defineAsyncComponent } from "vue";

export class Router {
    static routes = {};

    static components = {};

    static componentsByRouter = {};

    static async build () {
        const response = await fetch(process.env.VUE_APP_API_BACKEND);
        return await response.json();
    }
}

export function componentsView () {
    var components = {};
    Object.keys(Router.routes).forEach(route => {
        Router.routes[route].components.forEach(component => {
            // components[component.name] = defineAsyncComponent(() => {
            //     import('@/' + component.path)
            // })
            components[component.name] = component.path;
        });

        Router.componentsByRouter[route] = Router.routes[route].components
            .map(component => component.name);
    });

    Router.components = components;
}

export function currentTemplate (path) {
    return Router.routes[
        path.slice(1) || '/'
    ].template;
}

export function currentComponents (path) {
    var components = {};
    const routerComponents = Router.routes[path].components;
    routerComponents.forEach(component => {
        components[component.name] = defineAsyncComponent(() => {
            return import('@/' + component.path);
        });
    });
    return components;
}

export function currentPath () {
    return window.location.hash.slice(1) || '/';
}

export function getAllComponents () {
    var components = {};
    Object.keys(Router.components).forEach(component => {
        components[component] = defineAsyncComponent(() => {
            return import('@/' + Router.components[component])
        });
    });
    return components;
}

export function getComponentByRouter (path) {
    const components = Router.componentsByRouter[
        path.slice(1) || '/'
    ];
    return components;
}