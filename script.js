/* Mobile-first base styles */
:root {
    --magenta: #DB7093;
    --dusty-blue: #7B99B7;
    --sage: #96A886;
    --coral: #E9967A;
    --soft-pink: #FFB6C1;
    --cream: #FFF0F5;
    --text-color: #4A4A4A;
    --suit-blue: #6B8CAE;
}

* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html, body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--suit-blue);
    background-image: linear-gradient(to bottom right, var(--suit-blue), #8BA5C4);
    color: #F8F9FA;
    line-height: 1.6;
    padding: 0;
    margin: 0;
}

h1, h2, h3, .lead, .bet-description {
    color: #F8F9FA;
}

.container {
    width: 100%;
    padding: 15px;
    margin: 0 auto;
    max-width: 100%;
}

header {
    text-align: center;
    padding: 20px 15px;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--soft-pink);
}

.display-3 {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.lead {
    font-size: 1.1rem;
}

.betting-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 15px;
}

.betting-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    border: 1px solid var(--soft-pink);
    color: black;  /* Set font color to black for all text in betting boxes */
}

.betting-card h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
}

.bet-description, .wager-input label {
    color: black;  /* Ensure descriptions and labels are black */
}

.bet-description {
    font-size: 1rem;
    margin-bottom: 15px;
}

.odds-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.wager-input {
    margin-bottom: 15px;
    width: 100%;
}

.wager-input label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;
}

.wager-amount {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.bet-button {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    background-color: var(--magenta);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.over-under {
    text-align: center;
    width: 100%;
}

/* Tablet and larger screens */
@media (min-width: 768px) {
    .container {
        padding: 20px;
    }

    .display-3 {
        font-size: 2.5rem;
    }

    .betting-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .odds-container {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: 20px;
    }

    .wager-input {
        flex: 1;
        margin-bottom: 0;
    }

    .bet-button {
        flex: 1;
        min-width: 120px;
    }

    .over-under {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .over-under p {
        margin: 0;
    }

    .over-under .bet-button {
        width: 48%;
        display: inline-block;
    }

    .over-under div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
}

/* Desktop Styles */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 30px;
    }

    .betting-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    .display-3 {
        font-size: 3rem;
    }

    .odds-container {
        gap: 30px;
    }

    .bet-button {
        min-width: 150px;
    }

    .betting-card:hover {
        transform: translateY(-5px);
    }

    .bet-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(219, 112, 147, 0.2);
    }
}

/* Fix for iOS input zoom */
@media screen and (-webkit-min-device-pixel-ratio: 0) { 
    select,
    textarea,
    input {
        font-size: 16px;
    }
}

/* Prevent pull-to-refresh on mobile */
body {
    overscroll-behavior-y: contain;
}

/* Theme-specific styles */
.magenta-theme {
    border-color: var(--magenta);
}
.magenta-theme h3 {
    color: var(--magenta);
}
.magenta-theme .bet-button {
    background-color: var(--magenta);
}
.magenta-theme .bet-button:hover {
    background-color: darken(var(--magenta), 10%);
    box-shadow: 0 4px 8px rgba(219, 112, 147, 0.2);
}

.dusty-blue-theme {
    border-color: var(--dusty-blue);
}
.dusty-blue-theme h3 {
    color: var(--dusty-blue);
}
.dusty-blue-theme .bet-button {
    background-color: var(--dusty-blue);
}
.dusty-blue-theme .bet-button:hover {
    background-color: darken(var(--dusty-blue), 10%);
    box-shadow: 0 4px 8px rgba(123, 153, 183, 0.2);
}

.sage-theme {
    border-color: var(--sage);
}
.sage-theme h3 {
    color: var(--sage);
}
.sage-theme .bet-button {
    background-color: var(--sage);
}
.sage-theme .bet-button:hover {
    background-color: darken(var(--sage), 10%);
    box-shadow: 0 4px 8px rgba(150, 168, 134, 0.2);
}

.coral-theme {
    border-color: var(--coral);
}
.coral-theme h3 {
    color: var(--coral);
}
.coral-theme .bet-button {
    background-color: var(--coral);
}
.coral-theme .bet-button:hover {
    background-color: darken(var(--coral), 10%);
    box-shadow: 0 4px 8px rgba(233, 150, 122, 0.2);
}

.soft-pink-theme {
    border-color: var(--soft-pink);
}
.soft-pink-theme h3 {
    color: var(--soft-pink);
}
.soft-pink-theme .bet-button {
    background-color: var(--soft-pink);
}
.soft-pink-theme .bet-button:hover {
    background-color: darken(var(--soft-pink), 10%);
    box-shadow: 0 4px 8px rgba(255, 182, 193, 0.2);
}

.cream-theme {
    border-color: var(--cream);
}
.cream-theme h3 {
    color: var(--cream);
}
.cream-theme .bet-button {
    background-color: var(--cream);
    color: var(--text-color);
}
.cream-theme .bet-button:hover {
    background-color: darken(var(--cream), 10%);
    box-shadow: 0 4px 8px rgba(255, 240, 245, 0.2);
}

/* Importing Roboto font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
