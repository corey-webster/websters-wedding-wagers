let activeBets = [];

function calculatePotentialWinnings(odds, betAmount) {
    if (odds > 0) {
        return (betAmount * (odds / 100)).toFixed(2);
    } else {
        return (betAmount * (100 / Math.abs(odds))).toFixed(2);
    }
}

function validateWager(wagerId) {
    const wagerInput = document.getElementById(wagerId);
    const amount = parseInt(wagerInput.value);
    
    if (isNaN(amount) || amount < 20 || amount > 100) {
        alert('Please enter a valid wager amount between $20 and $100');
        return false;
    }
    return amount;
}

const betTypes = {
    tears: {
        yes: -150,
        no: 130,
        description: "Will the emotions get the best of Corey? Will he shed a tear during the ceremony?"
    },
    walk: {
        over: -110,
        under: -110,
        description: "How many seconds will it take Caitlyn to walk down the aisle and get to Corey? (O/U 30 seconds)"
    },
    dance: {
        over: -120,
        under: 100,
        description: "First dance duration (O/U 3:30)"
    },
    love: {
        corey: -110,
        caitlyn: -110,
        description: "Who said I love you first?"
    },
    trip: {
        yes: -220,
        no: 180,
        description: "Will a groomsmen or bridesmaid trip during the wedding ceremony?"
    },
    kiss: {
        over: 135,
        under: -125,
        description: "First kiss duration (O/U 3 seconds)"
    }
};

function placeBet(type, selection, wagerId) {
    const wagerAmount = validateWager(wagerId);
    if (!wagerAmount) return;

    const bet = {
        type: type,
        selection: selection,
        amount: wagerAmount,
        odds: betTypes[type][selection],
        potentialWinnings: calculatePotentialWinnings(betTypes[type][selection], wagerAmount)
    };

    activeBets.push(bet);
    updateBetSlip();
    createConfetti();
}

function updateBetSlip() {
    const betSlip = document.getElementById('active-bets');
    betSlip.innerHTML = '';
    
    activeBets.forEach((bet, index) => {
        const betElement = document.createElement('div');
        betElement.className = 'bet-item';
        betElement.innerHTML = `
            <p><strong>${betTypes[bet.type].description}</strong></p>
            <p>Selection: ${bet.selection.toUpperCase()}</p>
            <p>Wager: $${bet.amount}</p>
            <p>Potential Winnings: $${bet.potentialWinnings}</p>
            <button onclick="removeBet(${index})" class="remove-bet">Remove</button>
        `;
        betSlip.appendChild(betElement);
    });
}

function removeBet(index) {
    activeBets.splice(index, 1);
    updateBetSlip();
}

function createConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Add click event listeners to all bet buttons
document.addEventListener('DOMContentLoaded', () => {
    updateBetSlip();
});
