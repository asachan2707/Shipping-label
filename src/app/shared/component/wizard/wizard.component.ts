import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ClrWizard, ClrWizardPage } from '@clr/angular';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

    @Output() complete = new EventEmitter();
    @ViewChild('wizard') wizard: ClrWizard;
    @ViewChild('packageWeightForm') packageWeightForm: any;

    opened = false;
    isDataReady = false;
    untouched = true;
    loading = false;
    errorFlag = false;
    progress = 0;

    model = {
        sender: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        receiver: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        weight: '',
    };
    ngOnInit() { }

    get readyToFinish(): boolean {
        return !this.untouched && !this.loading;
    }

    resetWizard(): void {
        this.wizard.reset();
        const address = {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        };
        this.model = {
            sender: address,
            receiver: address,
            weight: ''
        };
        this.progress = 0;
    }

    onCommit(): void {
        if (this.untouched) {
            this.untouched = false;
            this.loading = true;
            const timer = setInterval(() => {
                this.progress = this.progress + 14;

                if (this.progress > 99) {
                    this.progress = 100;
                    this.loading = false;
                    clearInterval(timer);
                }
            }, 1000);
        } else {
            this.wizard.forceFinish();
            this.resetWizard();
        }
    }

    public jumpTo(page: ClrWizardPage) {
        if (page && page.completed) {
            this.wizard.navService.currentPage = page;
        } else {
            this.wizard.navService.setLastEnabledPageCurrent();
        }
        this.wizard.open();
    }

    doCancel(): void {
        this.wizard.close();
    }

    onpkgWeightCommit(): void {
        const value: any = this.packageWeightForm.value;
        if (typeof (value.weight) === 'number') {
            this.wizard.forceNext();
        } else {
            this.errorFlag = true;
        }
    }

    openModal() {
        this.opened = true;
    }

    onNext() {}
    onFinish() {
        this.isDataReady = true;
        this.complete.emit({
            data: this.model,
            flag: this.isDataReady
        });
    }
    onCancel() {
        this.untouched = true;
        this.loading = false;
        this.errorFlag = false;
        this.doCancel();
    }
}
