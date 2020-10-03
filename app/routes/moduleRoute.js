let mod = require('../controllers/moduleController');

module.exports = app => {
    app.route("/module")
        .get(mod.getModules)
        .post(mod.postModule);
    app.route("/module/:id")
        .delete(mod.deleteModule)
        .put(mod.updateModule);
};