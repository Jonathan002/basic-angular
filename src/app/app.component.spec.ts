import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>
  let params: { waterState: string };
  beforeEach(async () => {
    console.log('===============');
    await MockBuilder(AppComponent)
    params = { waterState: 'liquid' };
    fixture = MockRender(AppComponent, params as any) // Typed as any as it requires all properties and methods instead of just @Input()..
  });

  it(`should trigger ngOnChanges normally - with fixture.point.componentInstance`, () => {
    console.log('--- updating fixture.point.componentInstance.waterState ---');
    fixture.point.componentInstance.waterState = 'frozen';
    fixture.detectChanges() // frozen wont trigger
    expect(fixture.point.componentInstance.ngOnChangesCalls).toBe(2)
  });

  it(`should trigger ngOnChanges normally - with params`, () => {
    console.log('--- updating params.waterState ----');
    params.waterState = 'gas';
    fixture.detectChanges() // will trigger but fixture.point.componentInstance is left behind..
    expect(fixture.point.componentInstance.ngOnChangesCalls).toBe(2)
  });

  it(`should trigger ngOnChanges normally - with fixture.componentInstance`, () => {
    console.log('-- updating fixture.componentInstance.waterState ---');
    (fixture.componentInstance as any).waterState = 'fourthUnknownState';
    fixture.detectChanges()
    expect(fixture.point.componentInstance.ngOnChangesCalls).toBe(2)
  });


});
