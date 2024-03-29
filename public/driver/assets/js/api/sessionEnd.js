window.onunload = function () {
  // get params from url
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  fetch("/api/session-end/driver", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  });
};
