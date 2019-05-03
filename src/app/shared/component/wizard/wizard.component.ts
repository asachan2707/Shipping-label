import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard, ClrWizardPage } from '@clr/angular';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
    @ViewChild('wizard') wizard: ClrWizard;
    @ViewChild('senderForm') senderForm: any;
    @ViewChild('senderForm') receiverForm: any;
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

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...


    // doCancel(): void {
    //     this.wizard.close();
    //     this.resetWizard();
    // }

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

    onNext() {
        console.log('wizard: onNext', this.wizard);
    }
    onFinish() {
        this.isDataReady = true;
        console.log('model: ', this.model);
    }
    onCancel() {
        this.untouched = true;
        this.loading = false;
        this.errorFlag = false;
        this.doCancel();
        console.log('wizard: onCancel', this.wizard);
    }

    objectKey(model) {
        return Object.keys(model);
    }

    getAddress(key: string): boolean {
        if (key === 'sender' || key === 'receiver') {
            return true;
        } else {
            return false;
        }
    }
}
