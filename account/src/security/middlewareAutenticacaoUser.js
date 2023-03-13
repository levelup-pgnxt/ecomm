import passport from 'passport';

const localMiddlewareAut = (req, res, next) => {
  passport.authenticate(
    'local',
    { session: false },
    (error, user) => {
      if (error) {
        console.log(error);
        return res.status(400).json({ message: 'Senha ou Email incorretos' });
      }
      if (!user) return res.status(400).json({ message: 'Valores não encontrados' });
      req.user = user;
      return next();
    },
  )(req, res, next);
};

const bearerMiddlewareAut = (req, res, next) => {
  passport.authenticate(
    'bearer',
    { session: false },
    (error, user, info) => {
      if (error) return res.status(400).json({ message: 'Token inválido' });
      if (!user) return res.status(401).json({ message: 'Por favor, fazer login' });
      req.token = info.token;
      req.user = user;
      return next();
    },
  )(req, res, next);
};

export { localMiddlewareAut, bearerMiddlewareAut };