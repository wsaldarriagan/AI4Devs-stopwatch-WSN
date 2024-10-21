// tests.js
class StopwatchTests {
    constructor() {
        this.testsRun = 0;
        this.testsPassed = 0;
        this.testsFailed = 0;
    }

    async runTests() {
        console.log('Starting Stopwatch Tests...\n');

        // Run all test methods
        const testMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(prop => prop.startsWith('test') && typeof this[prop] === 'function');

        for (const testName of testMethods) {
            // Reset DOM before each test
            this.setupTestEnvironment();
            
            try {
                await this[testName]();
                this.testsPassed++;
                console.log(`✅ ${testName} passed`);
            } catch (error) {
                this.testsFailed++;
                console.error(`❌ ${testName} failed:`, error);
            }
            this.testsRun++;
        }

        this.displayResults();
    }

    setupTestEnvironment() {
        // Clear existing elements
        document.body.innerHTML = `
            <div class="timer-display" id="display">00:00:00</div>
            <div class="milliseconds" id="ms">000</div>
            <button id="startBtn">Start</button>
            <button id="clearBtn">Clear</button>
        `;

        // Reset stopwatch variables
        window.startTime = undefined;
        window.running = false;
        if (window.animationFrameId) {
            cancelAnimationFrame(window.animationFrameId);
        }

        // Initialize the stopwatch
        initStopwatch();
    }

    // Test helper methods
    assert(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Test cases
    async testInitialState() {
        const display = document.getElementById('display');
        const msDisplay = document.getElementById('ms');
        const startBtn = document.getElementById('startBtn');
        
        this.assert(display.textContent === '00:00:00', 'Initial display should be 00:00:00');
        this.assert(msDisplay.textContent === '000', 'Initial milliseconds should be 000');
        this.assert(startBtn.textContent === 'Start', 'Initial button text should be Start');
        this.assert(!startBtn.classList.contains('stop'), 'Start button should not have stop class');
    }

    async testStartButtonToggle() {
        const startBtn = document.getElementById('startBtn');
        
        startBtn.click();
        this.assert(startBtn.textContent === 'Stop', 'Button should show Stop after clicking Start');
        this.assert(startBtn.classList.contains('stop'), 'Button should have stop class');
        
        startBtn.click();
        this.assert(startBtn.textContent === 'Start', 'Button should show Start after clicking Stop');
        this.assert(!startBtn.classList.contains('stop'), 'Button should not have stop class');
    }

    async testTimerProgression() {
        const display = document.getElementById('display');
        const msDisplay = document.getElementById('ms');
        const startBtn = document.getElementById('startBtn');
        
        startBtn.click(); // Start timer
        await this.delay(1100); // Wait for 1.1 seconds
        
        const timeStr = display.textContent;
        const ms = parseInt(msDisplay.textContent);
        
        startBtn.click(); // Stop timer
        
        this.assert(timeStr === '00:00:01', 'Timer should show at least 1 second');
        this.assert(ms > 0, 'Milliseconds should be greater than 0');
    }

    async testClearButton() {
        const display = document.getElementById('display');
        const msDisplay = document.getElementById('ms');
        const startBtn = document.getElementById('startBtn');
        const clearBtn = document.getElementById('clearBtn');
        
        startBtn.click(); // Start timer
        await this.delay(500); // Wait for 0.5 seconds
        clearBtn.click(); // Clear timer
        
        this.assert(display.textContent === '00:00:00', 'Display should reset to 00:00:00');
        this.assert(msDisplay.textContent === '000', 'Milliseconds should reset to 000');
        this.assert(startBtn.textContent === 'Start', 'Button should reset to Start');
        this.assert(!startBtn.classList.contains('stop'), 'Start button should not have stop class');
    }

    displayResults() {
        console.log('\nTest Results:');
        console.log(`Total tests: ${this.testsRun}`);
        console.log(`Passed: ${this.testsPassed}`);
        console.log(`Failed: ${this.testsFailed}`);
    }
}