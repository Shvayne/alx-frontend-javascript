import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((promises) => {
    const results = [];
    for (const promise of promises) {
      results.push({
        status: promise.status,
        value: promise.value || promise.reason,
      });
    }
    return results;
  });
}
