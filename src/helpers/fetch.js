const url = "http://localhost:3000/leaderboard";

export default async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
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
        await response.json();
        return 'Punteggio registrato correttamente';
    } catch (error) {
        console.error(error);
        return 'Errore: punteggio non registrato';
    }
}