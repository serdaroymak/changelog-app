import api, { route } from "@forge/api";

export async function run(event, _context) {
  const response = await addChangeLog(event);

  console.log(`Response: ${JSON.stringify(response)}`);
}

async function addChangeLog() {
   
    const requestUrl = route`/rest/api/3/issue/AS-1/changelog`;
    
    let response = await api.asApp().requestJira(requestUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.status !== 200) {
        console.log(response.status);
    }

    return response.json();
}