const storeForm = document.getElementById("store-form");
const storeId = document.getElementById("store-id");
const storeAddress = document.getElementById("store-address");

storeForm.addEventListener("submit", addStore);
//Send POST to API to add store
async function addStore(e) {
  e.preventDefault();
  if (storeId.value === "" || storeAddress.value === "") {
    alert("Please fill in all fields");
  }
  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value
  };

  try {
    const res = await fetch("/api/v1/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendBody)
    });
    if (res.status === 400) {
      throw Error("Store already exists!");
    }
    alert("Store has been added to locator map");
    window.location.href = "/index.html";
  } catch (e) {
    alert(e);
    return;
  }
}
