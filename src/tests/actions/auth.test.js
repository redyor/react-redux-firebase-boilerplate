import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const action = login('abc123');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'abc123',
  });
});
test('should generate logout', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
