import { render as r } from '@testing-library/vue'
import App from './components/ComponentWithRouter';
import store from '@/store/storeOptions';

export default function render(component, name, path, goToPath) {
    const routes = [
        {
            name,
            path,
            component
        }];


    return r(App,
        {
            routes,
            store,
        },
        (vueInstance, vuexStore, router) => {
            router.push({ path: goToPath });
        }
    );
}