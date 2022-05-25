export function isOnMobile(): boolean {
  return window.document.body.clientWidth <= 600;
}

export function delay(millis: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, millis));
}
