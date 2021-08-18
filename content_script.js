function react() {
  const buttons = [
    'Claps claps',
    'Love it',
    'Cheers!',
    'I am loving it!',
    `It's party time`,
    `Here's my like`,
    `You're a unicorn`,
    'You deserve a trophy!',
    'Take my money',
    'Fly high',
  ];

  const toggleBtn = document.querySelector(
    '[aria-label="Toggle reaction modal"]'
  );

  if (!toggleBtn) {
    buttons.forEach((button) =>
      document.querySelector(`[aria-label="${button}"]`).click()
    );
  } else {
    toggleBtn.click();
    buttons.forEach((button) =>
      document.querySelector(`[data-reaction-name="${button}"]`).click()
    );
  }
}

react();
