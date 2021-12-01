/* const url = "http://localhost:3000/leaderboard"; */
const url = "https://json.extendsclass.com/bin/459833c75d7c";

export default async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.leaderboard;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function sendData(username, score) {
    
    const body = {
        id: Date.now(),
        username: username,
        score: score
    }
    
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(url, config);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return;
    }
}