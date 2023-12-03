import { spawn, exec } from 'child_process';

// Build the Next.js application
console.log('Building the application...');
exec('next build', (err, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);

  if (err) {
    console.error('Failed to build the application:', err);
    process.exit(1);
  }

  // Start the Next.js server
  const server = spawn('npm', ['run', 'dev']);

  server.stdout.on('data', (data) => {
    console.log(`Server: ${data}`);
  });

  // Wait for the server to be ready
  exec('npx wait-on http://localhost:3000', (err) => {
    if (err) {
      console.error('Error waiting for server to start:', err);
      server.kill();
      process.exit(1);
    }

    // Run Playwright tests
    exec('npx playwright test', (err, stdout, stderr) => {
      console.log(stdout);
      console.error(stderr);

      // Kill the server after tests are done
      server.kill();

      if (err) {
        console.error('Playwright tests failed:', err);
        process.exit(1);
      }

      console.log('Tests completed successfully');
      process.exit(0);
    });
  });
});
