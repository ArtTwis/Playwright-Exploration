const { test, expect } = require("@playwright/test");

test("Handling frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // getting all frames...
  const totalFrames = await page.frames();
  console.log("Total numbers of frames >>", totalFrames.length);

  // using the frame's name attribute...

  // using the frame's url...
  const frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });

  await frame1.locator("input[name='mytext1']").fill("Twinkle Goyal");

  await page.waitForTimeout(3000);

  // using the frame locator...
  const inputBoxElement = await page
    .frameLocator("frame[src='frame_2.html']")
    .locator("input[name='mytext2']");

  await inputBoxElement.fill("ArtTwis");

  await page.waitForTimeout(3000);

  await page.close();
});

test("Handling inner frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });

  await frame3.locator("input[name='mytext3']").fill("Hello, World");

  await page.waitForTimeout(3000);

  const childFrames = await frame3.childFrames();
  await childFrames[0].locator("//*[@id='i6']/div[3]/div").check();

  await page.waitForTimeout(3000);

  await page.close();
});
