import ReactRouter from 'react-router';
import routes from './routes';

var router = ReactRouter.create({
    location : ReactRouter.HashLocation,
    routes : routes
});

router.linkTo = (ref, state, params = {}, query = {}, preserve = false) => {
    if (preserve && ref.props) {
        params = ref.props.params || params
        query = ref.props.query || query
    }
    let func = function (event) {
        event.preventDefault();
        router.transitionTo(state, params, query);
    }
    return func.bind(ref);
}

export default router;
