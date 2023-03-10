import passport from 'passport';

const middlewareBearer = (req, res, next) => {
  passport.authenticate(
    'bearer',
    { session: false },
    (erro, usuario) => {
      if (erro) {
        return res.status(400).json({ message: 'Token inválido.' });
      }
      if (!usuario) {
        return res.status(401).json({ erro: erro.message });
      }
      req.user = usuario;
      return next();
    },
  )(req, res, next);
};

export default middlewareBearer;
