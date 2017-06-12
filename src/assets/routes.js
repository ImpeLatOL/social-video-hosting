import about from './components/about.vue';
import home from './components/home.vue';
import login from './components/login.vue';
import addVideo from './components/add-video.vue';

export const routes = [
    {path: '/', component: home},
    {path: '/about', component: about },
    {path: '/addVideo', component: addVideo },
    {path: '/login', component: login}
]