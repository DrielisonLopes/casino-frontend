export async function runMachine(coins = 20) {
  try {
    const url = `https://kanon-node-389214.wn.r.appspot.com/machine/${coins}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data
  } catch (error) {
    console.error("Error:", error);
  }
}
