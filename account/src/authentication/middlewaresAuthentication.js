import passport from 'passport';

export const middlewareLocal = (req, res, next) => {
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

export const middlewareBearer = (req, res, next) => {
  passport.authenticate(
    'bearer',
    { session: false },
    (erro, usuario, info) => {
      if (erro && erro.name === 'JsonWebTokenError') {
        return res.status(401).json({ erro: erro.message });
      }

      if (erro && erro.name === 'TokenExpiredError') {
        return res.status(401).json({ erro: erro.message, expiradoEm: erro.expiredAt });
      }
      if (erro) {
        return res.status(400).json({ erro: erro.message });
      }
      if (!usuario) {
        return res.status(401).json({ erro: erro.message });
      }

      req.token = info.token;
      req.user = usuario;
      return next();
    },
  )(req, res, next);
};
