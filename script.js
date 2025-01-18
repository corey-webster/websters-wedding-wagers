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

function placeBet(type, selection, wagerId) {
    const wagerAmount = validateWager(wagerId);
    if (!wagerAmount) return;

    const betTypes = {
        tears: {
            yes: -150,
            no: 130,
            description: "Will the groom cry?"
        },
        walk: {
            over: -110,
            under: -110,
            description: "Walk duration (O/U 45 seconds)"
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
            description: "Will someone trip?"
        },
        kiss: {
            over: 135,
            under: -125,
            description: "First kiss duration (O/U 3 seconds)"
        }
    };

    const bet = {
        type: type,
        selection: selection,
        odds: betTypes[type][selection],
        description: betTypes[type].description,
        wagerAmount: wagerAmount,
        potentialWinnings: calculatePotentialWinnings(betTypes[type][selection], wagerAmount)
    };

    // Remove any existing bet of the same type
    activeBets = activeBets.filter(b => b.type !== type);
    activeBets.push(bet);
    
    updateBetSlip();
    createConfetti();
}

function updateBetSlip() {
    const betSlipContainer = document.getElementById('active-bets');
    const potentialWinningsElement = document.getElementById('potential-winnings');
    
    betSlipContainer.innerHTML = '';
    let totalPotentialWinnings = 0;

    activeBets.forEach(bet => {
        const betElement = document.createElement('div');
        betElement.className = 'bet-item';
        betElement.innerHTML = `
            <p><strong>${bet.description}</strong></p>
            <p>Selection: ${bet.selection.toUpperCase()} (${bet.odds > 0 ? '+' + bet.odds : bet.odds})</p>
            <p>Wager: $${bet.wagerAmount}</p>
            <p>Potential Winnings: $${bet.potentialWinnings}</p>
            <hr>
        `;
        betSlipContainer.appendChild(betElement);
        totalPotentialWinnings += parseFloat(bet.potentialWinnings);
    });

    potentialWinningsElement.textContent = totalPotentialWinnings.toFixed(2);
}

// Add some fun confetti effects when placing bets
function createConfetti() {
    const colors = ['#DB7093', '#FFB6C1', '#C71585', '#E9967A', '#FFF0F5', '#96A886'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add click event listeners to all bet buttons
document.addEventListener('DOMContentLoaded', () => {
    const betButtons = document.querySelectorAll('.bet-button');
    betButtons.forEach(button => {
        button.addEventListener('click', () => {
            createConfetti();
        });
    });
});
