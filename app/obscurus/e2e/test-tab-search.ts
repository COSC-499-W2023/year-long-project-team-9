import { test, expect } from '@playwright/test';

//test if tabs and search is working for /submit
//note requires node server to be running
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/submit');
  await page.goto('http://localhost:3000/submit?requestId=f50a22fb-f9ce-4c83-8954-60d6aa4dba3b&tab=todo&submissionId=6b82a368-dd60-49f4-93fe-c6f8c9a05e1b');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('aws');
  await page.getByText('SubmitTodoProcessingCompletedArchivedFilter Results').click();
  await page.getByRole('tab', { name: 'Processing' }).click();
  await page.getByRole('button', { name: 'AWS Job Interview Stage 3 about 19 hours ago ansivana@gmail.com What are you looking for from a new position? Are you considering other positions in other companies? What is the professional achievement you\'re most proud of? What kind of working environment do you work best in? Due in 2 months Processing' }).click();
  await page.getByRole('tab', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'AWS Job Interview Stage 2 about 2 months ago ansivana@gmail.com Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths? Due in 8 days Completed' }).click();
  await page.getByRole('tab', { name: 'Archived' }).click();
  await page.getByText('SubmitTodoProcessingCompletedArchivedFilter Results').click();
  await page.getByPlaceholder('aws').click({
    clickCount: 3
  });
  await page.getByPlaceholder('aws').fill('');
  await page.getByPlaceholder('Search').dblclick();
  await page.getByRole('tab', { name: 'Todo' }).click();
  await page.getByRole('tab', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Test about 19 hours ago bakar.a.muhammad@gmail.com This is a test Due about 2 months ago Completed' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('test');
  await page.getByRole('button', { name: 'Test about 19 hours ago bakar.a.muhammad@gmail.com This is a test Due about 2 months ago Completed' }).click();
  await page.getByRole('tab', { name: 'Todo' }).click();
  await page.getByText('SubmitTodoProcessingCompletedArchivedFilter Results').click();
  await page.getByRole('tab', { name: 'Processing' }).click();
  await page.getByRole('tab', { name: 'Archived' }).click();
  await page.getByRole('tab', { name: 'Completed' }).click();
  await page.getByPlaceholder('test').click({
    clickCount: 4
  });
  await page.getByPlaceholder('test').fill('world');
  await page.getByRole('tab', { name: 'Archived' }).click();
  await page.getByText('SubmitTodoProcessingCompletedArchivedFilter Results').click();
  await page.getByRole('tab', { name: 'Completed' }).click();
  await page.getByText('SubmitTodoProcessingCompletedArchivedFilter Results').click();
  await page.getByRole('tab', { name: 'Processing' }).click();
  await page.getByText('SubmitTodoProcessingCompletedArchivedFilter Results').click();
  await page.getByRole('tab', { name: 'Todo' }).click();
  await page.getByText('SubmitTodoProcessingCompletedArchivedFilter Results').click();
});