import { db } from './firebase';

export const doCreateUser = (id, username, email, displayName = null, photoURL = null) => {
  const userData = {
    username,
    email,
  };
  if (displayName) {
    userData.displayName = displayName;
  }
  if (photoURL) {
    userData.photoURL = photoURL;
  }
  console.log('db', 'doCreateUser');
  return db.collection('users').doc(`${id}`).set(userData);
}

export const getLessons = () => {
  console.log('db', 'getLessons');
  return db.collection('lessons').get().then(snapshot => {
    const result = [];
    snapshot.forEach(doc => {
      let res = doc.data();
      res.id = doc.id;
      result.push(res);
    });
    return result;
  });
}

export const getUserLessonLogs = authUser => {
  if (authUser === null) {
    return Promise.resolve([]);
  }
  console.log('db', 'getUserLessonLogs');
  return db.collection('users').doc(authUser.uid)
    .collection('lessonLogs').get().then(snapshot => {
    const result = [];
    snapshot.forEach( doc => {
      result.push(doc.data());
    } );
    return result;
  });
}

export const getExercisesAndLog = (authUser, lessonId, cb) => {
  console.log('db', 'getExercisesAndLog');
  const exP = db.collection('lessons').doc(`${lessonId}`)
    .collection('exercises').orderBy("sort", "asc").get()
    .then(snapshot => {
      const exercises = [];
      snapshot.forEach(doc => {
        exercises.push({
          id: doc.id,
          title: doc.data().title,
          task: doc.data().task,
          intro_text: doc.data().intro_text,
          intro_keyboard: doc.data().intro_keyboard,
          sort: doc.data().sort
        });
      });
      return exercises;
  });
  let lessonLogPromise;
  if (authUser === null) {
    lessonLogPromise = null;
  } else {
    lessonLogPromise = db.collection('users').doc(authUser.uid)
      .collection('lessonLogs').where('lessonId', "==", lessonId).get().then(snapshot => {
        if (snapshot.empty) {
          return null;
        } else {
          let lessonLog;
          snapshot.forEach(doc => {
            lessonLog = doc.data();
          });
          return lessonLog;
        }
      });
  }

  Promise.all([exP, lessonLogPromise]).then(values => {
    cb(values[0], values[1]);
  });
}

export const storeOrUpdateLessonLog = (authUser, lessonLog) => {
  if (authUser === null) {
    return Promise.resolve(lessonLog);
  }

  if (lessonLog.hasOwnProperty('id')) {
    console.log('saving log. it has id',lessonLog.id, lessonLog, authUser);
    return db.collection('users').doc(authUser.uid).collection('lessonLogs')
      .doc(lessonLog.id).set(lessonLog).then(_ => lessonLog);
  } else {
    console.log('saving log. it has no id', lessonLog.id, lessonLog, authUser);
    return db.collection('users').doc(authUser.uid).collection('lessonLogs')
      .add(lessonLog).then(ref => {
        lessonLog.id = ref.id;
        return lessonLog;
      });
  }
}
