class PageTransitionStore {
  currentColor = null;

  constructor() {}

  setCurrentColor(color) {
    this.currentColor = color;
  }
}

export const pageTransitionStore = new PageTransitionStore();
