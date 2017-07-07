import { WeatherUIPage } from './app.po';

describe('weather-ui App', () => {
  let page: WeatherUIPage;

  beforeEach(() => {
    page = new WeatherUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
