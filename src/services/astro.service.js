import firebase from "../firebase";

const db = firebase.collection("/box");

class InterstellarDataService {
  getAll() {
    return db;
  }

  create(interstellar) {
    return db.add(interstellar);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new InterstellarDataService();