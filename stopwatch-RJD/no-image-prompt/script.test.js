const { formatTime, formatMilliseconds, pad, setupEventListeners } = require('./script');

// Set up the HTML structure needed for the tests
beforeEach(() => {
    document.body.innerHTML = `
        <div class="timer-container">
            <div class="timer">00:00:00</div>
            <div class="milliseconds">000</div>
        </div>
        <div class="buttons-container">
            <button class="start-stop">Start</button>
            <button class="reset">Clear</button>
        </div>
    `;

    // Call the setup function to attach event listeners
    setupEventListeners();
});

// Test pad function
test('pad adds leading zeros to single-digit numbers', () => {
    expect(pad(5)).toBe('05');
    expect(pad(10)).toBe('10');
    expect(pad(0)).toBe('00');
});

// Test formatTime function
test('formatTime formats milliseconds into HH:MM:SS', () => {
    expect(formatTime(0)).toBe('00:00:00');
    expect(formatTime(61000)).toBe('00:01:01'); // 61,000ms = 1 min, 1 sec
    expect(formatTime(3661000)).toBe('01:01:01'); // 3,661,000ms = 1 hr, 1 min, 1 sec
});

// Test formatMilliseconds function
test('formatMilliseconds extracts the last three digits as milliseconds', () => {
    expect(formatMilliseconds(0)).toBe('000');
    expect(formatMilliseconds(123)).toBe('123');
    expect(formatMilliseconds(999)).toBe('999');
});