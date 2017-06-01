import ReactGA from 'react-ga';
ReactGA.initialize('UA-40067241-3');

exports.onRouteUpdate = (state, page, pages) => {
    const { pathname } = state;
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
};
