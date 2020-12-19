const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/tasks');
  const passport = require('passport');

  module.exports = router => {
    // localhost:4000/tasks
    router.get('/tasks', index);

    // localhost:4000/tasks/12345
     router.get('/tasks/:id', show);

    // localhost:4000/tasks
    router.post('/tasks', passport.authenticate('jwt', { session: false }), create);

    // localhost:4000/tasks/update
    router.post('/tasks/update', passport.authenticate('jwt', { session: false }), update);
    
    // localhost:4000/tasks/destroy
    router.post('/tasks/destroy', passport.authenticate('jwt', { session: false }), destroy);


  };