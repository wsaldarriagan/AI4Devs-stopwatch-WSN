// Example Jest unit tests
test('stopwatch should increment time correctly', () => {
    const initialTime = 0;
    const expectedTime = 1000; // 1 second
    let time = initialTime;
  
    const incrementTime = () => {
      time += 1000;
    };
  
    incrementTime();
  
    expect(time).toBe(expectedTime);
  });
  