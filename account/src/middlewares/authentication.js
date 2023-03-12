import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import UserController from '../controllers/usersController.js';

async function checkPassword(password, hashedPassword) {
  const validPassword = await bcrypt.compare(password, hashedPassword);
  return validPassword;
}

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  try {
    const user = UserController.findUserEmail(email);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
passport.use(new LocalStrategy({
  usernameField: 'email', // use email as the username field
  passwordField: 'senha',
  session: false,
}, async (email, senha, done) => {
  try {
    const user = UserController.findUserEmail(email); // find the user by email
    if (!user) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    const validPassword = await checkPassword(senha, user.password);
    if (!validPassword) {
      return done(null, false, { message: 'Invalid email or password' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

export default passport;
