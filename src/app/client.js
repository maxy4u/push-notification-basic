const publicVapIdKey =
  "BANTtJrNWwtEdLIDx4pAsQ-DinEwECtKYu0hEPpKh8xrbhIuV-b-EThZE2dcnWBakPdDONoVxbQCJPB-c2sIm94";

if (navigator.serviceWorker) {
  try {
    registerWorker();
  } catch (e) {
    console.error(e);
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function registerWorker() {
  console.info("Registering Service Worker");
  const registeration = await navigator.serviceWorker.register("./worker.js", {
    scope: "/"
  });
  console.info("Registered Service Worker");
  console.info("Registering Push");
  const payload = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapIdKey)
  };
  const subscription = await registeration.pushManager.subscribe(payload);
  const bodyToSend = JSON.stringify(subscription);
  console.info("Registered Push");

  console.info("Sending Push");
  await fetch("./subscribe", {
    method: "POST",
    body: bodyToSend,
    headers: {
      "content-type": "application/json"
    }
  });
  console.info("Sent Push");
}
