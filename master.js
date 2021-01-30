// master.js
import { spawn, Thread, Worker } from "threads";

// We wrap the sample code in an async IIFE because Parcel 2's Babel defaults
// don't support top-level await.
(async () => {
  const auth = await spawn(new Worker("./workers/auth.js"));
  const hashed = await auth.hashPassword("Super secret password", "1234");

  console.log("Hashed password:", hashed);

  await Thread.terminate(auth);
})();
