import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxBadgeComponent, IGX_LIST_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_CALENDAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES } from 'igniteui-angular';
import { MyTasksComponent } from './my-tasks.component';

describe('MyTasksComponent', () => {
  let component: MyTasksComponent;
  let fixture: ComponentFixture<MyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTasksComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxBadgeComponent, IGX_LIST_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_CALENDAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
