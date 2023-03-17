import passport from 'passport';

const middlewareLocal = (req, res, next) => {
  passport.authenticate(
    'local',
    { session: false },
    (erro, usuario) => {
      if (erro) {
        return res.status(401).json({ erro: erro.message });
      }
      if (!usuario) {
        return res.status(400).json();
      }

      req.user = usuario;
      return next();
    },
  )(req, res, next);
};

export default middlewareLocal;
