import { __awaiter } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatCardHarness } from '@angular/material/card/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatCardModule } from '@angular/material/card';
import { CardHarnessExample } from './card-harness-example';
describe('CardHarnessExample', () => {
    let fixture;
    let loader;
    beforeAll(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule],
            declarations: [CardHarnessExample]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CardHarnessExample);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
    });
    it('should find card with text', () => __awaiter(void 0, void 0, void 0, function* () {
        const cards = yield loader.getAllHarnesses(MatCardHarness.with({ text: /spitz breed/ }));
        expect(cards.length).toBe(1);
        expect(yield cards[0].getTitleText()).toBe('Shiba Inu');
    }));
    it('should get subtitle text', () => __awaiter(void 0, void 0, void 0, function* () {
        const cards = yield loader.getAllHarnesses(MatCardHarness);
        expect(yield Promise.all(cards.map(c => c.getSubtitleText()))).toEqual([
            '',
            'Dog Breed'
        ]);
    }));
    it('should act as a harness loader for user content', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const card = yield loader.getHarness(MatCardHarness.with({ title: 'Shiba Inu' }));
        const footerSubcomponents = (_a = yield card.getAllHarnesses(MatButtonHarness)) !== null && _a !== void 0 ? _a : [];
        expect(footerSubcomponents.length).toBe(2);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oYXJuZXNzLWV4YW1wbGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1oYXJuZXNzL2NhcmQtaGFybmVzcy1leGFtcGxlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQW9CLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUMsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUMsTUFDNUQsMkNBQTJDLENBQUM7QUFDbkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTFELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFDbEMsSUFBSSxPQUE2QyxDQUFDO0lBQ2xELElBQUksTUFBcUIsQ0FBQztJQUMxQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FDUixZQUFZLENBQUMsR0FBRyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDeEIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDbkMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVOLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixNQUFNLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEdBQVMsRUFBRTtRQUMxQyxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEJBQTBCLEVBQUUsR0FBUyxFQUFFO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3JFLEVBQUU7WUFDRixXQUFXO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpREFBaUQsRUFBRSxHQUFTLEVBQUU7O1FBQy9ELE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixNQUFNLG1CQUFtQixTQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBSSxFQUFFLENBQUM7UUFDL0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rlc3RCZWQsIENvbXBvbmVudEZpeHR1cmUsIHdhaXRGb3JBc3luY30gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7VGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcvdGVzdGJlZCc7XG5pbXBvcnQge01hdEJ1dHRvbkhhcm5lc3N9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi90ZXN0aW5nJztcbmltcG9ydCB7TWF0Q2FyZEhhcm5lc3N9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQvdGVzdGluZyc7XG5pbXBvcnQge0hhcm5lc3NMb2FkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7QnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZ31cbiAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3Rlc3RpbmcnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7Q2FyZEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NhcmQtaGFybmVzcy1leGFtcGxlJztcblxuZGVzY3JpYmUoJ0NhcmRIYXJuZXNzRXhhbXBsZScsICgpID0+IHtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8Q2FyZEhhcm5lc3NFeGFtcGxlPjtcbiAgbGV0IGxvYWRlcjogSGFybmVzc0xvYWRlcjtcbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBUZXN0QmVkLmluaXRUZXN0RW52aXJvbm1lbnQoQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZygpKTtcbiAgfSk7XG4gIGJlZm9yZUVhY2goXG4gICAgd2FpdEZvckFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtNYXRDYXJkTW9kdWxlXSxcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbQ2FyZEhhcm5lc3NFeGFtcGxlXVxuICAgICAgfSkuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICB9KSk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KENhcmRIYXJuZXNzRXhhbXBsZSk7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgbG9hZGVyID0gVGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudC5sb2FkZXIoZml4dHVyZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZmluZCBjYXJkIHdpdGggdGV4dCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGF3YWl0IGxvYWRlci5nZXRBbGxIYXJuZXNzZXMoTWF0Q2FyZEhhcm5lc3Mud2l0aCh7dGV4dDogL3NwaXR6IGJyZWVkL30pKTtcbiAgICBleHBlY3QoY2FyZHMubGVuZ3RoKS50b0JlKDEpO1xuICAgIGV4cGVjdChhd2FpdCBjYXJkc1swXS5nZXRUaXRsZVRleHQoKSkudG9CZSgnU2hpYmEgSW51Jyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZ2V0IHN1YnRpdGxlIHRleHQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FyZHMgPSBhd2FpdCBsb2FkZXIuZ2V0QWxsSGFybmVzc2VzKE1hdENhcmRIYXJuZXNzKTtcbiAgICBleHBlY3QoYXdhaXQgUHJvbWlzZS5hbGwoY2FyZHMubWFwKGMgPT4gYy5nZXRTdWJ0aXRsZVRleHQoKSkpKS50b0VxdWFsKFtcbiAgICAgICcnLFxuICAgICAgJ0RvZyBCcmVlZCdcbiAgICBdKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBhY3QgYXMgYSBoYXJuZXNzIGxvYWRlciBmb3IgdXNlciBjb250ZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRDYXJkSGFybmVzcy53aXRoKHt0aXRsZTogJ1NoaWJhIEludSd9KSk7XG4gICAgY29uc3QgZm9vdGVyU3ViY29tcG9uZW50cyA9IGF3YWl0IGNhcmQuZ2V0QWxsSGFybmVzc2VzKE1hdEJ1dHRvbkhhcm5lc3MpID8/IFtdO1xuICAgIGV4cGVjdChmb290ZXJTdWJjb21wb25lbnRzLmxlbmd0aCkudG9CZSgyKTtcbiAgfSk7XG59KTtcbiJdfQ==