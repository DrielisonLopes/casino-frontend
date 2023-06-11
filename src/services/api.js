export async function runMachine(coins) {
    try {
      const url = `https://kanon-node-389214.wn.r.appspot.com/machine/${coins}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      
      // You can perform additional operations with the data here
      return data
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors that occur during the request
    }
  }