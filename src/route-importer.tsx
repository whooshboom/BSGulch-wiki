import type { RouteObject } from "react-router";

interface RouteModule {
    default: React.ComponentType;
    loader?: () => Promise<any>;
    action?: () => Promise<any>;
}

// Lazy loading is still currently enabled, so the routes are only actually loaded when linked on the current page. This will probably work fine until working with search- at which point we can probably just load the search results when the person stops typing.

export function create_routes_from_modules(modules: Record<string, () => Promise<RouteModule>>): RouteObject[] {
    const routes: RouteObject[] = [];

    Object.keys(modules).forEach((path) => {
        // Convert a file path into a React-Router route. ./wiki-pages/index.tsx => /index
        const routePath = path
            .replace('/^\.\/wiki-pages/', '')
            .replace('/\.tsx?$/', '')
            .replace('/\[([^\]]+)\]/g', ':$1')
        
        // Create a route from that file path.
        routes.push({
            path: routePath,
            lazy: async () => {
                const module = await modules[path]();
                return {
                    Component: module.default,
                    loader: module.loader,
                    action: module.action,
                };
            },
        });
    });
    return routes;
};