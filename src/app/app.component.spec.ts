import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture
  let params: { waterState: string };
  beforeEach(async () => {
    console.log('===============');
    await MockBuilder(AppComponent)
    const params = { waterState: 'liquid' };
    fixture = MockRender(AppComponent, params)
  });

  it(`should trigger ngOnChanges`, () => {
    console.log('fixture.point.componentInstance.waterState');
    fixture.point.componentInstance.waterState = 'frozen';
    fixture.detectChanges() // frozen wont trigger
  });

  it(`should trigger ngOnChanges normally - with params`, () => {
    console.log('params.waterState');
    params.waterState = 'gas';
    fixture.detectChanges() // gas wont trigger
  });

  it(`should trigger ngOnChanges normally`, () => {
    console.log('fixture.componentInstance.waterState');
    (fixture.componentInstance as any).waterState = 'fourthUnknownState';
    fixture.detectChanges()
  });


});
