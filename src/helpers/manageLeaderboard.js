export function getTenSortedBestScores(leaderboard) {
    const sorted = [...leaderboard].sort((a, b) =>Number(b.score) - Number(a.score));
    return sorted.slice(0, 10);
}

export function getMessageFromScoreAndLeaderboard(score, leaderboard) {
    
    if(score <= 0) {
        return messages.default;
    }
    
    if(leaderboard.length <= 0) {
        return messages.noLeaderBoard;
    }
    
    if(score > leaderboard[0].score) {
        return messages.newBestScore;
    }

    if(leaderboard.length < 10 || score > leaderboard[leaderboard.length - 1].score) {
        return messages.oneOfTenleaders;
    }


    return messages.default;
}

const messages = {
    default: {
        title: 'Partita finita',
        subtitle: 'Riprova, puoi fare di meglio!',
    },
    oneOfTenleaders: {
        title: 'Ottimo punteggio!',
        subtitle: 'Sei tra i 10 migliori classificati!',
    },
    newBestScore: {
        title: 'Fenomenale!',
        subtitle: 'Hai stabilito un nuovo record!',
    },
    noLeaderBoard: {
        title: 'Partita finita!',
        subtitle: 'Impossibile ottenere la classifica'
    }
}