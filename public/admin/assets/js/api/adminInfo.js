(async () => {
  document.querySelector("html").style.display = "none";
  // get params from url
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (!token) {
    window.location.replace("../admin-login/");
  } else {
    // get admin info
    try {
      const response = await fetch("/api/credentials/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });
      const result = await response.json();
      if (result.code === 200) {
        document.querySelector(".admin-name").innerText +=
          result.data.userName;
      } else {
        window.location.replace("../admin-login/");
      }
    } catch (error) {
      console.log(error);
      window.location.replace("../admin-login/");
    }
  }
  document.querySelector("html").style.display = "block";
})();
